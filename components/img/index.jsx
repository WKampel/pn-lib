import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default props => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.src ? <Image transition={500} style={styles.image} source={{ uri: props.src }} contentFit={props.fit || 'contain'} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {
    flex: 1,
    width: '100%',
  },
})
