import { createContext, useEffect } from 'react'
import { DeviceEventEmitter } from 'react-native'
import io from 'socket.io-client'

export const Context = createContext({})

export const useSocketEvent = (type, callback, dependencies) => {
  useEffect(() => {
    const eventListener = DeviceEventEmitter.addListener('socket event', info => {
      if (info.type === type) callback(info.data)
    })
    return () => {
      eventListener.remove()
    }
  }, [dependencies])
}

export const SocketProvider = props => {
  useEffect(() => {
    const socket = io('http://137.184.135.124:3050', {
      query: { token: props.token },
    })

    socket.on('error', e => {
      alert('error:' + e)
    })

    socket.on('new message', data => {
      DeviceEventEmitter.emit('socket event', { type: 'new message', data })
    })

    return () => {
      socket?.off('error')
      socket?.off('new message')
    }
  }, [props.token])

  return <Context.Provider value={{}}>{props.children}</Context.Provider>
}
