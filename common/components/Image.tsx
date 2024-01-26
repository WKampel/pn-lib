import { ImageSourcePropType, ImageStyle, Image as ReactNativeImage, StyleProp } from 'react-native'

export const Image = ({ source: sourceProp, style }: { source: ImageSourcePropType | string; style?: StyleProp<ImageStyle> }) => {
  const source = typeof sourceProp === 'string' ? { uri: sourceProp } : sourceProp
  return <ReactNativeImage source={source} style={style} resizeMode='contain' />
}
