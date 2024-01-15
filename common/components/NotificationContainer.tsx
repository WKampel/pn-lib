import { ReactNode } from 'react'
import { Platform, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const NotificationContainer = ({ children }: { children: ReactNode }) => {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView
      style={{
        right: 0,
        position: (Platform.OS === 'web' ? 'fixed' : 'absolute') as 'absolute' | 'relative',
        width: '100%',
        maxHeight: '100%',
        maxWidth: 450,
        backgroundColor: 'transparent',
        flexDirection: 'column-reverse',
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingTop: insets.top || 25,
      }}
      pointerEvents='box-none'
    >
      {children}
    </ScrollView>
  )
}
