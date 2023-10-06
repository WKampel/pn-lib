import React from 'react'
import { Pressable, Image as RNImage, View } from 'react-native'
import { styled } from '../libs/wakui'

const Image = styled('image', ({ style, src, onPress, fit }) => {
  let source = src
  if (typeof src === 'string') source = { uri: src }

  const img = <RNImage style={{ width: '100%', height: '100%' }} source={source} resizeMode={fit || 'contain'} />

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={{ overflow: 'hidden', ...(style ?? {}) }}>
        {img}
      </Pressable>
    )
  }
  return <View style={{ overflow: 'hidden', ...(style ?? {}) }}>{img}</View>
})

export default Image
