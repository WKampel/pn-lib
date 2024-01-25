import { useIsFocused } from '@react-navigation/native'
import { useEffect, useRef } from 'react'

export const useScreenBlur = (func: Function) => {
  const funcRef = useRef(func) // Store func in a ref to make it accessible in cleanup
  const focused = useIsFocused()

  useEffect(() => {
    funcRef.current = func
  }, [func])

  useEffect(() => {
    if (!focused) func()

    return () => {
      // Call func on unmount
      funcRef.current()
    }
  }, [focused])
}
