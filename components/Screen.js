import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Screen = props => {
  const children = props.safeArea ? <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView> : props.children
  return <View style={[styles.screen, props.style]}>{children}</View>
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    maxWidth: 1000,
    backgroundColor: 'white',
  },
})

export default Screen
