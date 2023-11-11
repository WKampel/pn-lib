import { Platform, ScrollView } from 'react-native'
import useStyles from '../hooks/useStyles'

const ScrollCard = ({ children, style }) => {
  const styles = useStyles(styleConfig)

  return (
    <ScrollView contentContainerStyle={styles.scrollView} style={[styles.container, style]}>
      {children}
    </ScrollView>
  )
}

const styleConfig = {
  base: {
    scrollView: {
      padding: '$spacing-l',
      gap: '$spacing-l',
    },
    container: {
      borderWidth: Platform.OS === 'web' && 1,
      borderColor: '$color-border-on-surface',
      borderRadius: '$radius-s',
      backgroundColor: '$color-bg-surface',
      flexGrow: 0,
    },
  },
}

export default ScrollCard
