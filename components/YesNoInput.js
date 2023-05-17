import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'

export default props => {
  const branding = useBranding()

  return (
    <View style={[branding.input.style, styles.yesNoInput]}>
      <Pressable style={[styles.option, props.state?.val === 'yes' ? styles.selected : {}]} onPress={() => props.state?.set('yes')}>
        <Text style={styles.label}>Yes</Text>
      </Pressable>
      <Pressable style={[styles.option, props.state?.val === 'no' ? styles.selected : {}]} onPress={() => props.state?.set('no')}>
        <Text style={styles.label}>No</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  yesNoInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: null,
  },
  option: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: 'white',
  },
  label: { fontSize: 12, textAlign: 'center' },
})
