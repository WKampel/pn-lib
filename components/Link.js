import { Link as ReactNativeLink } from '@react-navigation/native'
import React from 'react'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'

const Link = ({ children, to }) => {
  const { hovered, pressed, interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig, [], { hovered, pressed })

  return (
    <ReactNativeLink {...interactiveEvents} to={to} style={styles}>
      {children}
    </ReactNativeLink>
  )
}

const styleConfig = {
  base: {
    color: '$color-ui-primary',
    fontSize: '$font-size-m',
    '@hovered': {
      opacity: '$opacity-hovered',
    },
  },
}

export default Link
