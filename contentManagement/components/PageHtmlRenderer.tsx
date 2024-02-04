import { Platform } from 'react-native'
import MobileWebView from 'react-native-webview'
import { useTheme } from '../../common/hooks/useTheme'

type PageHtmlRendererProps = {
  html: string
}

export const PageHtmlRenderer = (props: PageHtmlRendererProps) => {
  const tokens = useTheme()
  const id = '__PageHtmlRenderer__'

  const html = `
  <head>
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">


  </head>
    <style>
        #${id} { overflow-x: hidden; max-width: 100%;  }
        #${id} * { max-width: 100%; height: auto; }
    </style>
    <div id='${id}'>
        ${props.html}
    </div>
  `

  if (Platform.OS === 'web') {
    return <div style={{ height: '100%', overflowY: 'auto' }} dangerouslySetInnerHTML={{ __html: html }} />
  } else {
    return <MobileWebView style={{ flex: 1 }} source={{ html }} />
  }
}
