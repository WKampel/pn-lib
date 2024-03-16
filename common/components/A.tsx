import { A as ExpoA } from '@expo/html-elements'
import { ReactNode } from 'react'
import { useTheme } from '../hooks/useTheme'

type AProps = {
  children: ReactNode
  href: string
  newTab?: boolean
  download?: boolean
  style?: object
}

export const A = ({ children, href, newTab, download, style }: AProps) => {
  const { tokens } = useTheme()
  return (
    <ExpoA
      download={download}
      href={href}
      // @ts-ignore
      target={newTab ? '_blank' : null}
      style={[
        {
          color: tokens.color_ui_primary,
          fontSize: tokens.font_size_m,
        },
        style,
      ]}
    >
      {children}
    </ExpoA>
  )
}
