import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Field = props => {
  return (
    <View style={[styles.field, props.fieldChild ? { flex: 1, marginBottom: 0 } : null, props.style]}>
      {props.label ? (
        <View style={styles.header}>
          <Text style={styles.label}>{props.label}</Text>
        </View>
      ) : null}
      <View style={styles.children}>{props.children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 15,
  },
  children: {
    flexDirection: 'row',
    gap: 10,
  },
  header: {
    padding: 7,
  },
  label: {
    color: 'rgb(100, 100, 100)',
    fontSize: 12,
    fontWeight: 'bold',
  },
})

export default Field
