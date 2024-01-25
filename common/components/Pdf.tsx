import { Platform } from 'react-native'
// @ts-ignore
import WebWebView from 'react-native-web-webview'
import MobileWebView from 'react-native-webview'

type PdfProps = {
  src: string
  style?: object
}

export const Pdf = ({ src, style }: PdfProps) => {
  // Web
  if (Platform.OS === 'web') {
    return <WebWebView style={style} source={{ uri: src }} />
  }

  // Mobile
  return <MobileWebView style={style} source={{ uri: src }} />
}
