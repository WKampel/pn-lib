import { Platform } from 'react-native'
// @ts-ignore
import WebWebView from 'react-native-web-webview'
import MobileWebView from 'react-native-webview'

type PageHtmlRendererProps = {
  src: string
}

export const PagePdfRenderer = (props: PageHtmlRendererProps) => {
  // Web
  if (Platform.OS === 'web') {
    return <WebWebView style={{ width: '100%', height: '100%' }} source={{ uri: props.src }} />
  }

  // Mobile
  return <MobileWebView style={{ width: '100%', height: '100%' }} source={{ uri: props.src }} />
}
