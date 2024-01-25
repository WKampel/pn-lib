import { useContext } from 'react'
import { DrawerContext } from '../contexts/DrawerContext'

export const useDrawer = () => {
  const drawer = useContext(DrawerContext)
  if (!drawer) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }
  return drawer
}
