import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useRef } from 'react'
import { DeviceEventEmitter } from 'react-native'
import { SocketEventMap, SocketEventName } from '../../../pn-core-lib/types/SocketEvent'

export const useSocketEvent = <T extends SocketEventName>(
  type: T, // Use keyof AllRealTimeEvents to restrict type to valid event names
  callback: (data: SocketEventMap[T]) => void,
  dependencies: Array<any> = []
) => {
  // Use a ref to track the latest callback
  const callbackRef = useRef(callback)

  // Update the ref each time the callback changes
  useEffect(() => {
    callbackRef.current = callback
  }, [callback]) // Add all dependencies that might change the callback

  useFocusEffect(
    React.useCallback(() => {
      const eventListener = DeviceEventEmitter.addListener('socket event', info => {
        if (info.type === type) {
          // Use the current callback from the ref
          callbackRef.current(info.data)
        }
      })

      return () => {
        eventListener.remove()
      }
    }, [type, ...dependencies])
  ) // Add dependencies that might change how the event is handled
}
