import React from 'react'
import { Platform } from 'react-native'
import WebWebView from 'react-native-web-webview'
import MobileWebView from 'react-native-webview'

const WebView = props => {
  const originalContentWidth = props.originalContentWidth
  const parentWidth = 451 // replace this with actual parent width
  const scaleFactor = parentWidth / originalContentWidth

  if (props.source?.html) {
    props.source.html = `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">
      <style>
        #scaled-content {
          transform: scale(${scaleFactor});
          transform-origin: top left;
        }
      </style>
      </head>
      <body>
      <div id="scaled-content">
        ${props.source?.html}
      </div>
      </body>
      </html>
    `
  }

  if (Platform.OS === 'web') return <WebWebView {...props} />
  return <MobileWebView {...props} />
}

export default WebView
