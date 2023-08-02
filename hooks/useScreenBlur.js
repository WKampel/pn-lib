import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'

const useScreenBlur = func => {
  const focused = useIsFocused()

  useEffect(() => {
    if (!focused) func()
  }, [focused])
}

export default useScreenBlur
