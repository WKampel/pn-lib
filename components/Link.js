import { A } from '@expo/html-elements'
import { Link as ReactLink } from '@react-navigation/native'
import { useBranding } from '../contexts/Branding'

const Link = props => {
  const { colors } = useBranding()

  if (props.external) {
    return (
      <A download={props.download} style={{ color: colors.primary }} href={props.to} target={props.newTab ? '_blank' : null}>
        {props.children}
      </A>
    )
  }

  return (
    <ReactLink style={{ color: colors.primary }} to={props.to}>
      {props.children}
    </ReactLink>
  )
}

export default Link
