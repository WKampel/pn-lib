import { AntDesign } from '@expo/vector-icons'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'

export default ({ state, variants = [], label }) => {
  const checked = state.val === true
  if (checked) variants.push('checked')
  const { brandingStyles } = useBranding('checkBox', variants)

  return (
    <Pressable style={styles.buttonContainer} onPress={state.set.bind(null, checked ? false : true)}>
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
    width: 25,
    height: 25,
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
