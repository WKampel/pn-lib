import React, { useEffect, useState } from 'react'
import { Image as ReactNativeImage } from 'react-native'
import { Image } from './Image'

export const ImageAutoHeight = ({ source, style }: { style: object; source: string }) => {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    const calculateAspectRatio = async () => {
      let width, height

      if (typeof source === 'number') {
        const { width: imageWidth, height: imageHeight } = ReactNativeImage.resolveAssetSource(source)

        width = imageWidth
        height = imageHeight

        if (width && height) {
          setAspectRatio(width / height)
        }
      } else {
        ReactNativeImage.getSize(source, (imageWidth: number, imageHeight: number) => {
          width = imageWidth
          height = imageHeight

          if (width && height) {
            setAspectRatio(width / height)
          }
        })
      }
    }

    calculateAspectRatio()
  }, [source])

  console.log('style:', [{ aspectRatio }, style])

  return <Image source={source} style={[{ width: 'auto', height: 'auto' }, { aspectRatio }, style]} />
}
