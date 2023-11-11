import { ScrollView, StyleSheet, View } from 'react-native'

const OptionalScroll = ({ scroll = false, containerStyle, scrollViewStyle, children }) => {
  const combinedContainerStyle = StyleSheet.flatten(containerStyle)
  const combinedScrollViewStyle = StyleSheet.flatten(scrollViewStyle)

  if (scroll) {
    return (
      <ScrollView style={combinedContainerStyle} contentContainerStyle={combinedScrollViewStyle}>
        {children}
      </ScrollView>
    )
  }

  return <View style={[combinedContainerStyle, combinedScrollViewStyle]}>{children}</View>
}

export default OptionalScroll
