import { Modal, Pressable, SafeAreaView, StyleSheet } from 'react-native'
import KeyboardAvoidingView from './KeyboardAvoidingView'

const Popup = props => {
  return (
    <Modal visible={props.visible} transparent={true} animationType='fade'>
      <KeyboardAvoidingView>
        <Pressable style={styles.background} onPress={props.onPressBackground} />
        <SafeAreaView pointerEvents='box-none' style={{ flex: 1 }}>
          {props.children}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
})

export default Popup
