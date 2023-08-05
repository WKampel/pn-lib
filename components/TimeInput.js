import moment from 'moment'
import { createElement, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
import BorderLabel from './BorderLabel'

const TimeInput = ({ state, label }) => {
  const { brandingStyles } = useBranding('textInput')
  const time = useState('')

  useEffect(() => {
    if (moment(time.val, 'HH:mm').isValid()) {
      if (state?.set) state.set(moment(time.val, 'HH:mm').toDate())
    }
  }, [time.val])

  useEffect(() => {
    if (moment(state?.val).isValid()) {
      time.set(moment(state?.val).format('HH:mm'))
    }
  }, [state?.val])

  return (
    <View style={{ flex: 1 }}>
      {label && <BorderLabel label={label} backgroundColor={brandingStyles.input.backgroundColor} color='gray' />}
      {createElement('input', {
        type: 'time',
        style: { ...brandingStyles.input, ...styles.input },
        value: time.val,
        onChange: e => time.set(e.target.value),
      })}
    </View>
  )
}

export default TimeInput

const styles = StyleSheet.create({
  input: {
    boxSizing: 'border-box',
  },
})
