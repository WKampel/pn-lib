import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useBranding } from '../contexts/Branding'
import usePlatformStyles from '../hooks/usePlatformStyles'
import Spinner from './Spinner'

const Button = ({ onPress, linkTo, variants, style, disabled, loading, icon, text }) => {
  const nav = useNavigation()

  if (loading) disabled = true
  variants = disabled ? ['disabled', ...[].concat(variants)] : variants

  const { brandingStyles } = useBranding('button', variants)

  const platformStyles = usePlatformStyles(brandingStyles, {
    web: { container: { alignSelf: 'flex-start' } },
  })

  function handlePress() {
    if (onPress) onPress()
    if (linkTo) nav.navigate(linkTo)
  }

  return (
    <TouchableOpacity activeOpacity={0.75} disabled={disabled} style={[styles.container, platformStyles.container, style]} onPress={handlePress}>
      {loading ? (
        <Spinner />
      ) : (
        <Text style={[platformStyles.text]}>
          {icon}
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Button
