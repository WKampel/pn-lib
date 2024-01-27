import { ReactNode, useEffect } from 'react'
import { useWindowDimensions } from 'react-native'
import { Drawer } from 'react-native-drawer-layout'
import { useCurrentRoute } from '../../hooks/useCurrentRoute'
import { useDrawer } from '../../hooks/useDrawer'
import { DrawerProvider } from '../../providers/DrawerProvider'
import { PracticeDrawerItemType } from '../../types/PracticeDrawerItemType'
import { PracticeDrawerContent } from './PracticeDrawerContent'

type PracticeDrawerProps = {
  switchPractice?: () => void
  items: PracticeDrawerItemType[]
  children: ReactNode
  firstName: string
  lastName: string
  onPressProfile: () => void
}

export const PracticeDrawer = (props: PracticeDrawerProps) => {
  return (
    <DrawerProvider>
      <Inner {...props} />
    </DrawerProvider>
  )
}

const Inner = ({ switchPractice, items, children, firstName, lastName, onPressProfile }: PracticeDrawerProps) => {
  const dimensions = useWindowDimensions()
  const { open, setOpen } = useDrawer()

  const route = useCurrentRoute()

  // Close drawer when route changes
  useEffect(() => setOpen(false), [route])

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      drawerType={dimensions.width > 900 ? 'permanent' : undefined}
      renderDrawerContent={() => (
        <PracticeDrawerContent firstName={firstName} lastName={lastName} onPressProfile={onPressProfile} items={items} switchPractice={switchPractice} />
      )}
    >
      {children}
    </Drawer>
  )
}
