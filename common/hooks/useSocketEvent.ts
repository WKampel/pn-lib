import { useEffect, useRef } from 'react'
import { DeviceEventEmitter } from 'react-native'

export const useSocketEvent = (type: string, callback: (data: any) => void, dependencies = []) => {
  // Use a ref to track the latest callback
  const callbackRef = useRef(callback)

  // Update the ref each time the callback changes
  useEffect(() => {
    callbackRef.current = callback
  }, [callback]) // Add all dependencies that might change the callback

  useEffect(() => {
    const eventListener = DeviceEventEmitter.addListener('socket event', info => {
      if (info.type === type) {
        // Use the current callback from the ref
        callbackRef.current(info.data)
      }
    })

    return () => {
      eventListener.remove()
    }
  }, [type, ...dependencies]) // Add dependencies that might change how the event is handled

  // No need to return anything from this hook
}
