import { A } from '@expo/html-elements'
import { Link as ReactLink } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { styled } from '../libs/wakui'

const Link = styled('link', ({ style, children, href, to, newTab, download, onMouseEnter, onMouseLeave, onPressIn, onPressOut }) => {
  if (!to && !href) return <></>

  return (
    <Pressable tabIndex={-1} focusable={false} onPressIn={onPressIn} onPressOut={onPressOut} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
})

export default Link
