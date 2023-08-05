import moment from 'moment'
import { createElement, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
import BorderLabel from './BorderLabel'

const DayInput = ({ state, label }) => {
  const { brandingStyles } = useBranding('textInput')
  const date = useState('')

  useEffect(() => {
    if (moment(date.val).isValid()) {
      if (state?.set) state.set(moment(date.val).toDate())
    }
  }, [date.val])

  useEffect(() => {
    if (moment(state?.val).isValid()) {
      date.set(moment(state?.val).format('YYYY-MM-DD'))
    }
  }, [state?.val])

  return (
    <View style={{ flex: 1 }}>
      {label && <BorderLabel label={label} backgroundColor={brandingStyles.input.backgroundColor} color='gray' />}
      {createElement('input', {
        type: 'date',
        style: { ...brandingStyles.input, ...styles.input },
        value: date.val,
        onChange: e => date.set(e.target.value),
      })}
    </View>
  )
}

export default DayInput

const styles = StyleSheet.create({
  input: {
    boxSizing: 'border-box',
  },
})
