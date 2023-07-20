import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'

const ImageAutoHeight = ({ src, style }) => {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    const calculateAspectRatio = async () => {
      let width, height

      Image.getSize(src, (imageWidth, imageHeight) => {
        width = imageWidth
        height = imageHeight

        if (width && height) {
          setAspectRatio(width / height)
        }
      })
    }

    calculateAspectRatio()
  }, [src])

  let source = src
  if (typeof src === 'string') source = { uri: src }

  return <Image source={source} style={[{ aspectRatio }, style]} />
}

export default ImageAutoHeight
