import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default props => {
  let source = props.src
  if (typeof props.src === 'string') source = { uri: props.src }
  return <View style={props.style}>{source ? <Image style={styles.image} source={source} resizeMode={props.fit || 'contain'} /> : null}</View>
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})
