import { ReactNode } from 'react'
import { Modal, Pressable, SafeAreaView } from 'react-native'
import { KeyboardAvoidingView } from './KeyboardAvoidingView'

const PopupContent = ({ onPressBackground, children }: { onPressBackground?: () => void; children: ReactNode }) => {
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
export const PopupWithoutModal = PopupContent

export const Popup = ({ visible, ...props }: { visible: boolean; onPressBackground?: () => void; children: ReactNode }) => {
  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <PopupContent {...props} />
    </Modal>
  )
}
