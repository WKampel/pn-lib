import { A } from '@expo/html-elements'
import { Link as ReactLink } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { styled } from '../libs/wakui'

const Link = styled(
  ({ isHovered, isPressed }) => ({
    style: {
      color: '$color.primary',
      opacity: isPressed ? 1 : isHovered ? 0.85 : 0.7,
      cursor: 'pointer',
    },
    defaultVariants: {
      size: 'm',
    },
    variants: {
      size: {
        s: {},
        m: {
          fontSize: 15,
        },
        l: {},
      },
    },
  }),
  ({ style, children, href, to, newTab, download, onMouseEnter, onMouseLeave, onPressIn, onPressOut }) => {
    if (!to && !href) return <></>

    return (
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {href && (
          <A download={download} style={style} href={href} target={newTab && '_blank'}>
            {children}
          </A>
        )}

        {to && (
          <ReactLink style={style} to={to}>
            {children}
          </ReactLink>
        )}
      </Pressable>
    )
  }
)

export default Link
