import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'

export default props => {
  return <View style={[styles.screen, props.style]}>{props.children}</View>
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS == 'web' ? 15 : 10,
    flex: 1,
    maxWidth: 1000,
    height: '10%',
  },
})
