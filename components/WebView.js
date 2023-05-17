import React from 'react'
import { Platform } from 'react-native'
import WebWebView from 'react-native-web-webview'
import MobileWebView from 'react-native-webview'

const WebView = props => {
  if (Platform.OS === 'web') return <WebWebView {...props} />
  return <MobileWebView {...props} style={{ backgroundColor: 'rgba(0,0,0,0)' }} />
}
export default WebView
