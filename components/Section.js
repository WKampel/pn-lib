import React from 'react'
import { StyleSheet, View } from 'react-native'
import { mobileStyles } from '../libs/utils'

const Section = ({ children, onMouseEnter, onMouseLeave, style }) => {
  return (
    <View onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={[styles.section, style]}>
      {children}
    </View>
  )
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

    ...mobileStyles({
      backgroundColor: 'transparent',
      padding: 0,
      borderWidth: 0,
    }),
  },
})

export default Section
