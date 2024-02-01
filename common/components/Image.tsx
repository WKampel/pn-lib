import { ImageSourcePropType, ImageStyle, Image as ReactNativeImage, StyleProp } from 'react-native'

export type ImageProps = { source: ImageSourcePropType | string; style?: StyleProp<ImageStyle> }

export const Image = ({ source: sourceProp, style }: ImageProps) => {
  const source = typeof sourceProp === 'string' ? { uri: sourceProp } : sourceProp
  return <ReactNativeImage source={source} style={style} resizeMode='contain' />
}
