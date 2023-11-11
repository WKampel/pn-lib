import { useState } from 'react'
import DrawerContext from '../contexts/DrawerContext'

const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  return <DrawerContext.Provider value={{ open, setOpen }}>{children}</DrawerContext.Provider>
}

export default DrawerProvider
