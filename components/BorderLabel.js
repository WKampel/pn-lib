import { StyleSheet, Text, View } from 'react-native'

const BorderLabel = ({ label, backgroundColor = 'white', borderWidth = 1, color = 'gray' }) => (
  <View style={styles.container}>
    <View style={[styles.line, { backgroundColor, height: borderWidth }]} />
    <Text style={[styles.text, { color, marginTop: -borderWidth }]}>{label}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 10,
    zIndex: 10,
    height: 0,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 9,
    paddingHorizontal: 5,
    height: 0,
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
    justifyContent: 'flex-start',
    textWrap: 'nowrap',
  },
  line: {
    width: '100%',
  },
})

export default BorderLabel
