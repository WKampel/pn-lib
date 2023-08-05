import { AntDesign } from '@expo/vector-icons'
import { useEffect } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'

export default ({ state, variants = [], label }) => {
  const checked = value === true
  if (checked) variants.push('checked')
  const { brandingStyles } = useBranding('checkBox', variants)

  const value = state.val

  useEffect(() => {
    if (value === undefined) {
      state.set(false)
    } else if (typeof value === 'string') {
      state.set(value === 'true' ? true : false)
    }
  }, [value])

  return (
    <Pressable style={styles.buttonContainer} onPress={state.set.bind(null, !value)}>
      <View style={[styles.button, brandingStyles]}>{checked ? <AntDesign name='check' size={16} color='white' /> : null}</View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  radio: {},
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 10,
  },
  button: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    minHeight: 0,
    flex: Platform.OS === 'web' ? 'unset' : null,
  },
  label: {
    color: 'rgb(150,150,150)',
    fontSize: 12,
  },
})
