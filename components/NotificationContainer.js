import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useStyles from '../hooks/useStyles'

const NotificationContainer = ({ children }) => {
  const insets = useSafeAreaInsets()
  const styles = useStyles(styleConfig)

  return (
    <ScrollView style={[styles, { paddingTop: insets.top || 25 }]} pointerEvents='box-none'>
      {children}
    </ScrollView>
  )
}

const styleConfig = {
  base: {
    right: 0,
    position: 'fixed',
    width: '100%',
    maxHeight: '100%',
    maxWidth: 450,
    backgroundColor: 'transparent',
    flexDirection: 'column-reverse',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
}

export default NotificationContainer
