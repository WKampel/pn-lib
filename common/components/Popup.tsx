import { ReactNode } from 'react'
import { Modal, Pressable, SafeAreaView } from 'react-native'
import { KeyboardAvoidingView } from './KeyboardAvoidingView'

export const Popup = ({ visible, onPressBackground, children }: { visible: boolean; onPressBackground?: () => void; children: ReactNode }) => {
  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <KeyboardAvoidingView>
        <Pressable
          style={{
            backgroundColor: 'rgba(0,0,0,.75)',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          onPress={onPressBackground}
        >
          <SafeAreaView pointerEvents='box-none' style={{ flex: 1 }}>
            {children}
          </SafeAreaView>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  )
}
