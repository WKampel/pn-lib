import { ParamListBase, Link as ReactNativeLink } from '@react-navigation/native'
import { To } from '@react-navigation/native/lib/typescript/src/useLinkTo'
import React, { ReactNode } from 'react'
import { useTheme } from '../hooks/useTheme'

type LinkProps = {
  children: ReactNode
  to: To<ParamListBase>
}

export const Link = ({ children, to }: LinkProps) => {
  const tokens = useTheme()

  return (
    <ReactNativeLink
      to={to}
      style={{
        color: tokens.color_ui_primary,
        fontSize: tokens.font_size_m,
      }}
    >
      {children}
    </ReactNativeLink>
  )
}
