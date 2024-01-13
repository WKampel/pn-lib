import { Platform } from 'react-native'
import MobileWebView from 'react-native-webview'

type PageHtmlRendererProps = {
  html: string
}

export const PageHtmlRenderer = (props: PageHtmlRendererProps) => {
  const id = '__PageHtmlRenderer__'

  const html = `
    <style>
        #${id} { overflow-x: hidden; max-width: 100%; }
        #${id} * { max-width: 100%; height: auto; }
    </style>
    <div id='${id}'>
        ${props.html}
    </div>
  `

  if (Platform.OS === 'web') {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  } else {
    // I'll do this later
    return <MobileWebView source={{ html }} />
  }
}
