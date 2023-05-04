import { Platform, StyleSheet, View } from 'react-native'
import Signature from 'react-native-signature-canvas'
import SignatureCanvas from 'react-signature-canvas'

export default props => {
  const onOK = signature => {
    console.log(signature)
  }

  return (
    <View style={styles.signature}>
      {Platform.OS === 'web' ? (
        <SignatureCanvas backgroundColor='rgb(220, 220, 230)' />
      ) : (
        <Signature
          clearText='Clear'
          // save button text
          confirmText='Save'
          onOK={onOK}
          // style={{ height: 75 }}
          // backgroundColor='rgb(220, 220, 230)'
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  signature: {
    // flex: 1,
    // borderWidth: 1,
    // borderColor: 'rgb(200, 200, 220)',
    // borderRadius: 10,
  },
})
