import WebView from './WebView'

const Pdf = props => {
  return <WebView style={{ width: '100%', height: '100%' }} source={{ uri: props.src }} />
}

export default Pdf
