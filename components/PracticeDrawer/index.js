import { useWindowDimensions } from 'react-native'
import { Drawer } from 'react-native-drawer-layout'
import useDrawer from '../../hooks/useDrawer'
import DrawerProvider from '../../providers/DrawerProvider'
import PracticeDrawerContent from './PracticeDrawerContent'

const PracticeDrawer = props => {
  return (
    <DrawerProvider>
      <Inner {...props} />
    </DrawerProvider>
  )
}

const Inner = ({ switchPractice, items, children }) => {
  const dimensions = useWindowDimensions()
  const { open, setOpen } = useDrawer()

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      drawerType={dimensions.width > 900 && 'permanent'}
      renderDrawerContent={() => <PracticeDrawerContent items={items} switchPractice={switchPractice} />}
    >
      {children}
    </Drawer>
  )
}

export default PracticeDrawer
