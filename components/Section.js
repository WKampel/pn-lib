import React from 'react'
import { StyleSheet, View } from 'react-native'

const Section = ({ children }) => {
  return <View style={styles.section}>{children}</View>
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(220, 220, 220)',
    padding: 20,
    borderRadius: 5,
    gap: 25,
  },
})

export default Section
