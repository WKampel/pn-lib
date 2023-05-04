import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Context } from '../../contexts/style'

export default props => {
  return (
    <View style={styles.yesNoInput}>
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
    backgroundColor: 'rgb(220, 220, 230)',
    borderRadius: 10,
    padding: 2,
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 220)',
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
