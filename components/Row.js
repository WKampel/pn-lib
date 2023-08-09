import React from 'react'
import { StyleSheet, View } from 'react-native'

const Row = ({ children, style }) => {
  return (
    <View style={[styles.row, style]}>{React.Children.map(children, child => (child ? React.cloneElement(child, { insideRow: true }) : null))}</View>
  )
}

export default Row

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
  },
})
