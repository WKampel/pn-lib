import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'

export default props => {
  let source = props.src
  if (typeof props.src === 'string') source = { uri: props.src }
  return (
    <Pressable onPress={props.onPress} style={[props.style, !props.onPress && { cursor: 'normal' }]}>
      {source ? <Image style={styles.image} source={source} resizeMode={props.fit || 'contain'} /> : null}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})
