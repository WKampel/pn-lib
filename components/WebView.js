import React from 'react'
import { Platform } from 'react-native'
import WebWebView from 'react-native-web-webview'
import MobileWebView from 'react-native-webview'

const WebView = props => {
  if (props.source?.html) {
    props.source.html = `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">
      </head>
      <body>
      ${props.source?.html}
      </body>
      </html>
    `
  }

  if (Platform.OS === 'web') return <WebWebView {...props} />
  return <MobileWebView {...props} />
}
export default WebView
