import { StyleSheet, Text, View } from 'react-native'

const BorderLabel = ({ label, backgroundColor = 'white', borderWidth = 1, color = 'gray' }) => (
  <View style={styles.container}>
    <View style={[styles.line, { backgroundColor, height: borderWidth }]}></View>
    <Text style={[styles.text, { color, marginTop: -borderWidth }]}>{label}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 10,
    zIndex: 10,
    alignSelf: 'flex-start',
    height: 10,
    marginBottom: -10,
  },
  text: {
    fontSize: 9,
    paddingHorizontal: 5,
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
    justifyContent: 'flex-start',
    textWrap: 'nowrap',
    transform: [{ translateY: -5 }],
  },
  line: {
    alignSelf: 'stretch',
  },
})

export default BorderLabel
