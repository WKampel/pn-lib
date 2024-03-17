import { ReactNode, useEffect, useRef } from 'react'
import { Animated, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '../hooks/useTheme'

type ModalProps = {
  visible: boolean
  children: ReactNode
}

export const ModalNew = ({ visible, children }: ModalProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  const { tokens } = useTheme()

  const insets = useSafeAreaInsets()

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [visible])

  if (!visible) return null
  return (
    <Animated.ScrollView
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: fadeAnim,
        backgroundColor: 'rgba(0, 0, 0, .5)',
      }}
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingHorizontal: tokens.spacing_s,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={{ backgroundColor: 'white', flex: 1, borderRadius: tokens.radius_s, padding: tokens.spacing_m, gap: tokens.spacing_s }}>{children}</View>
    </Animated.ScrollView>
  )
}
