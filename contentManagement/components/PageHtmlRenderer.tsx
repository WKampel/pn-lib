import { Platform } from 'react-native'
import MobileWebView from 'react-native-webview'

type PageHtmlRendererProps = {
  html: string
}

export const PageHtmlRenderer = (props: PageHtmlRendererProps) => {
  const id = '__PageHtmlRenderer__'

  const html = `
  <head>
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">


  </head>
    <style>
        #${id} { overflow-x: hidden; max-width: 100%; overflow-y: auto; }
        #${id} * { max-width: 100%; height: auto; }
    </style>
    <div id='${id}'>
        ${props.html}
    </div>
  `

  if (Platform.OS === 'web') {
    return (
      <div style={{ flex: 1 }}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  } else {
    // I'll do this later
    return <MobileWebView style={{ flex: 1 }} source={{ html }} />
  }
}
