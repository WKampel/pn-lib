import { useContext } from 'react'
import { WakuiContext } from './configProvider'

const useVariants = compName => {
  const { variants } = useContext(WakuiContext)
  return variants?.[compName] || {}
}

export default useVariants
