import { ImageSourcePropType, Image as ReactNativeImage } from 'react-native'

export const Image = ({ source: sourceProp, style }: { source: ImageSourcePropType | string; style?: object }) => {
  const source = typeof sourceProp === 'string' ? { uri: sourceProp } : sourceProp
  return <ReactNativeImage source={source} style={style} resizeMode='contain' />
}
