import { AntDesign } from '@expo/vector-icons'
import { useEffect } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'

export default props => {
  const branding = useBranding()

  const value = props.state.val

  useEffect(() => {
    if (value === undefined) {
      props.state.set(false)
    } else if (typeof value === 'string') {
      props.state.set(value === 'true' ? true : false)
    }
  }, [value])

  const selected = value === true

  return (
    <Pressable style={styles.buttonContainer} onPress={props.state.set.bind(null, !value)}>
      <View style={[branding.input.style, styles.button, props.borderRadius ? { borderRadius: props.borderRadius } : null]}>
        {selected ? <AntDesign name='check' size={16} color='black' /> : null}
      </View>
      <Text style={styles.label}>{props.label}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  radio: {},
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    width: 20,
    height: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    minHeight: 0,
    flex: Platform.OS === 'web' ? 'unset' : null,
    paddingLeft: null,
  },
  label: {
    color: 'rgb(150,150,150)',
    fontSize: 12,
  },
})
