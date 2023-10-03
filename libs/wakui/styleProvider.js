import { createContext, useContext } from 'react'

export const StyleContext = createContext()

export const useParentStyle = () => {
  const styles = useContext(StyleContext)
  return styles
}

const StyleProvider = ({ children, style }) => {
  return <StyleContext.Provider value={style}>{children}</StyleContext.Provider>
}

export default StyleProvider
