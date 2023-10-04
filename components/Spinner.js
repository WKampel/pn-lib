import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default props => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator style={styles.spinner} color={props.color || 'blue'} />
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    color: 'white',
  },
})
