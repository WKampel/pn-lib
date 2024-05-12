import { ReactElement } from 'react'
import { DrawerContext } from '../contexts/DrawerContext'

export const DrawerProvider = ({ children, open, setOpen }: { children: ReactElement; open: boolean; setOpen: (open: boolean) => void }) => {
  return <DrawerContext.Provider value={{ open, setOpen }}>{children}</DrawerContext.Provider>
}
