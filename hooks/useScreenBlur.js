import { useIsFocused } from '@react-navigation/native'
import { useEffect, useRef } from 'react'

const useScreenBlur = func => {
  const funcRef = useRef(func) // Store func in a ref to make it accessible in cleanup
  const focused = useIsFocused()

  useEffect(() => {
    // Update the ref during each render
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

export default useScreenBlur
