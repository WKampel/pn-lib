import { StyleSheet, View } from 'react-native'

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>
}

export default Row

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
  },
})
