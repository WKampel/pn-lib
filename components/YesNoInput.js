import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import BorderLabel from './BorderLabel'

export default props => {
  const { brandingStyles } = useBranding('yesNoInput')

  return (
    <View>
      {props.label && <BorderLabel label={props.label} backgroundColor={brandingStyles.container.backgroundColor} color='gray' />}

      <View style={[styles.yesNoInput, brandingStyles.container]}>
        <Pressable style={[styles.option, props.state?.val === 'yes' ? styles.selected : {}]} onPress={() => props.state?.set('yes')}>
          <Text style={styles.optionText}>Yes</Text>
        </Pressable>
        <Pressable style={[styles.option, props.state?.val === 'no' ? styles.selected : {}]} onPress={() => props.state?.set('no')}>
          <Text style={styles.optionText}>No</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  yesNoInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'rgb(220,220,220)',
  },
  optionText: { fontSize: 12, textAlign: 'center', textWrap: 'nowrap' },
  label: {},
})
