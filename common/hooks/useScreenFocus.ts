import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'

export const useScreenFocus = (func: Function) => {
  const focused = useIsFocused()

  useEffect(() => {
    if (focused) func()
  }, [focused])
}
