import { ReactNode, useEffect, useRef } from 'react'
import { Animated, Modal, Pressable, SafeAreaView } from 'react-native'
import { KeyboardAvoidingView } from './KeyboardAvoidingView'

type PopupProps = {
  visible: boolean
  onPressBackground?: () => void
  children: ReactNode
}

const PopupContent = ({ onPressBackground, children }: Omit<PopupProps, 'visible'>) => {
  return (
    <KeyboardAvoidingView>
      <Pressable
        style={{
          backgroundColor: 'rgba(0,0,0,.75)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        onPress={onPressBackground}
      />
      <SafeAreaView pointerEvents='box-none' style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

// The modal has a bug on ios where it doesn't always show despite visible=true. That's why we have this component.
export const PopupWithoutModal = ({ visible, ...props }: PopupProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [visible])

  if (!visible) return null
  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: fadeAnim,
      }}
    >
      <PopupContent {...props} />
    </Animated.View>
  )
}

export const Popup = ({ visible, ...props }: PopupProps) => {
  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <PopupContent {...props} />
    </Modal>
  )
}
