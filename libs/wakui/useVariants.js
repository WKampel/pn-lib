import { useContext } from 'react'
import WakuiProvider from './configProvider'

const useVariants = compName => {
  const { variants } = useContext(WakuiProvider)
  return variants[compName] || {}
}

export default useVariants
