import { ReactNode, useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { Drawer as RNDrawer } from 'react-native-drawer-layout'
import { useCurrentRoute } from '../hooks/useCurrentRoute'
import { DrawerProvider } from '../providers/DrawerProvider'

type DrawerProps = {
  drawerContent: () => JSX.Element
  children: ReactNode
}

export const Drawer = ({ drawerContent, children }: DrawerProps) => {
  const [open, setOpen] = useState(false)
  const dimensions = useWindowDimensions()

  const route = useCurrentRoute()

  // Close drawer when route changes
  useEffect(() => setOpen(false), [route])

  return (
    <DrawerProvider open={open} setOpen={setOpen}>
      <RNDrawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        drawerType={dimensions.width > 900 ? 'permanent' : undefined}
        renderDrawerContent={drawerContent}
      >
        {children}
      </RNDrawer>
    </DrawerProvider>
  )
}
