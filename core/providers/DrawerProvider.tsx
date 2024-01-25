import { ReactElement, useState } from 'react'
import { DrawerContext } from '../contexts/DrawerContext'

export const DrawerProvider = ({ children }: { children: ReactElement }) => {
  const [open, setOpen] = useState(false)
  return <DrawerContext.Provider value={{ open, setOpen }}>{children}</DrawerContext.Provider>
}
