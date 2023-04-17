import { Platform, StyleSheet, View } from 'react-native'
import Signature from 'react-native-signature-canvas'
import SignatureCanvas from 'react-signature-canvas'

export default props => {
  return (
    <View style={styles.signature}>
      {Platform.OS === 'web' ? <SignatureCanvas backgroundColor='#f0f0f0' /> : <Signature style={{ height: 75 }} backgroundColor='#f0f0f0' />}
    </View>
  )
}
const styles = StyleSheet.create({
  signature: {},
})
