import { StyleSheet, Text } from 'react-native'
import { useBranding } from '../contexts/Branding'

const Title = ({ text, variants = [] }) => {
  const { brandingStyles } = useBranding('title', variants)

  return <Text style={[styles.title, brandingStyles]}>{text}</Text>
}

const styles = StyleSheet.create({
  title: {},
})

export default Title
