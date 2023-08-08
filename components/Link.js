import { A } from '@expo/html-elements'
import { Link as ReactLink } from '@react-navigation/native'
import { useBranding } from '../contexts/Branding'

const Link = ({ external, children, to, newTab, style }) => {
  const { colors } = useBranding()

  if (external) {
    return (
      <A style={[{ color: colors.primary }, style]} href={to} target={newTab ? '_blank' : null}>
        {children}
      </A>
    )
  }

  return (
    <ReactLink style={[{ color: colors.primary, style }]} to={to}>
      {children}
    </ReactLink>
  )
}

export default Link
