import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'

const useScreenFocus = func => {
  const focused = useIsFocused()

  useEffect(() => {
    if (focused) func()
  }, [focused])
}

export default useScreenFocus
