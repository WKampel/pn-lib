import { useEffect } from 'react'
import { DeviceEventEmitter } from 'react-native'

const useSocketEvent = (type, callback, dependencies) => {
  useEffect(() => {
    const eventListener = DeviceEventEmitter.addListener('socket event', info => {
      if (info.type === type) callback(info.data)
    })
    return () => {
      eventListener.remove()
    }
  }, [dependencies])
}

export default useSocketEvent
