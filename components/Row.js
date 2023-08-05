import { StyleSheet, View } from 'react-native'

const Row = ({ children, style }) => {
  return <View style={[styles.row, style]}>{children}</View>
}

export default Row

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
  },
})
