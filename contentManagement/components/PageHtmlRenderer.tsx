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
        #${id} { overflow-x: hidden; max-width: 100%; padding:${tokens.spacing_s}px;  }
        #${id} * { max-width: 100%; height: auto; }

        #pageHtmlRendererBody{
          margin: 0!important;
          padding: 0!important;
        }
    </style>
    <body id='pageHtmlRendererBody'>
      <div id='${id}'>
          ${props.html}
      </div>
    </body>
  `

  const blockNavigation = (navState: any) => {
    // Block navigation to youtube. This is to prevent clicking on an embeded youtube video's title and opening the full youtube website. Apple rejected the app for this.
    if (navState.url.includes('youtube.com') && !navState.url.includes('/embed/')) {
      return false
    }
    return true
  }

  if (Platform.OS === 'web') {
    return <div style={{ height: '100%', overflowY: 'auto' }} dangerouslySetInnerHTML={{ __html: html }} />
  } else {
    return (
      <MobileWebView
        onShouldStartLoadWithRequest={blockNavigation} // for iOS
        onNavigationStateChange={blockNavigation}
        allowsInlineMediaPlayback={true}
        style={{ flex: 1 }}
        source={{ html }}
      />
    )
  }
}
