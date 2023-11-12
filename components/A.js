import { A as ExpoA } from '@expo/html-elements'
import React from 'react'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'

const A = ({ style, children, href, newTab, download }) => {
  const { hovered, pressed, interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig, [], { hovered, pressed })

  return (
    <ExpoA {...interactiveEvents} style={[styles, style]} download={download} href={href} target={newTab && '_blank'}>
      {children}
    </ExpoA>
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

export default A
