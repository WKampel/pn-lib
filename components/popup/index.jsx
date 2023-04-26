import { KeyboardAvoidingView, Modal, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'

const Popup = props => {
  return (
    <Modal visible={props.visible} transparent={true} animationType='fade'>
      <Pressable onPress={props.onPressBackground} style={styles.background} />
      <SafeAreaView pointerEvents={'box-none'} style={styles.safeAreaView}>
        <KeyboardAvoidingView pointerEvents={'box-none'} behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.keyboardAvoidingView}>
          {props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },
  safeAreaView: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
})

export default Popup
