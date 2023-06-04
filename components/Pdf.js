import WebView from './WebView'

const Pdf = props => {
  return <WebView source={{ uri: props.src }} />
}

export default Pdf
