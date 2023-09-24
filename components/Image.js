import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'

export default props => {
  let source = props.src
  if (typeof props.src === 'string') source = { uri: props.src }

  const ImageComponent = <Image style={styles.image} source={source} resizeMode={props.fit || 'contain'} />

  if (props.onPress) {
    return (
      <Pressable onPress={props.onPress} style={props.style}>
        {ImageComponent}
      </Pressable>
    )
  }

  return <View style={[props.style]}>{ImageComponent}</View>
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})
