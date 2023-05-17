import moment from 'moment'
import { createElement, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'

const DayInput = props => {
  const branding = useBranding()
  const date = useState('')

  useEffect(() => {
    if (moment(date.val).isValid()) {
      props.state.set(moment(date.val).toDate())
    }
  }, [date.val])

  useEffect(() => {
    if (moment(props.state.val).isValid()) {
      date.set(moment(props.state.val).format('YYYY-MM-DD'))
    }
  }, [props.state.val])

  return createElement('input', {
    type: 'date',
    style: { ...branding.input.style, ...styles.input },
    value: date.val,
    onChange: e => date.set(e.target.value),
  })
}

export default DayInput

const styles = StyleSheet.create({
  input: {
    boxSizing: 'border-box',
  },
})
