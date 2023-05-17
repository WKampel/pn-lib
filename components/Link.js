import { A } from '@expo/html-elements'
import { Link as ReactLink } from '@react-navigation/native'
import { useBranding } from '../contexts/Branding'

const Link = props => {
  const branding = useBranding()

  if (props.external) {
    return (
      <A style={branding.link.style} href={props.to} target={props.newTab ? '_blank' : null}>
        {props.children}
      </A>
    )
  }

  return (
    <ReactLink style={branding.link.style} to={props.to}>
      {props.children}
    </ReactLink>
  )
}

export default Link
