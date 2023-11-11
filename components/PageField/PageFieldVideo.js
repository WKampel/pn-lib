import WebView from '../WebView'

const PageFieldVideo = ({ value }) => {
  return <WebView source={{ uri: value }} style={{ width: '100%', aspectRatio: 1.78 }} />
}

export default PageFieldVideo
