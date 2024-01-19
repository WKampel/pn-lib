import React, { useEffect, useState } from 'react'
import { Image as ReactNativeImage } from 'react-native'
import { Image } from './Image'

export const ImageAutoHeight = ({ source, style }: { style: object; source: string }) => {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    const calculateAspectRatio = async () => {
      let width, height

      ReactNativeImage.getSize(source, (imageWidth: number, imageHeight: number) => {
        width = imageWidth
        height = imageHeight

        if (width && height) {
          setAspectRatio(width / height)
        }
      })
    }

    calculateAspectRatio()
  }, [source])

  return <Image source={source} style={[{ aspectRatio }, style]} />
}
