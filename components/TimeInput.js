import { createElement } from 'react'
import { StyleSheet } from 'react-native'
import { useBranding } from '../contexts/Branding'

const DayInput = props => {
  const branding = useBranding()

  return createElement('input', {
    type: 'time',
    style: { ...branding?.input.style, ...styles.input },
    value: props.state.val,
    onChange: e => props.state.set(e.target.value),
  })
}

export default DayInput

const styles = StyleSheet.create({
  input: {
    boxSizing: 'border-box',
  },
})
