import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import { mobileStyles } from '../libs/utils'

const Section = ({ children, onMouseEnter, onMouseLeave, style, scroll, variants }) => {
  const { brandingStyles } = useBranding('section', variants)

  const props = { onMouseEnter, onMouseLeave }
  if (scroll) {
    return (
      <ScrollView {...props} contentContainerStyle={[styles.section, brandingStyles, style]}>
        {children}
      </ScrollView>
    )
  } else {
    return (
      <View {...props} style={[styles.section, brandingStyles, style]}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(220, 220, 220)',
    padding: 20,
    borderRadius: 5,
    ...mobileStyles({
      backgroundColor: 'transparent',
      padding: 0,
      borderWidth: 0,
    }),
  },
})

export default Section
