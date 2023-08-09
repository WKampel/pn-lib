import { createContext, useEffect } from 'react'
import { DeviceEventEmitter } from 'react-native'
import io from 'socket.io-client'
import { usePractice } from './Practice'

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
  const practice = usePractice()
  useEffect(() => {
    const socket = io(process.env.EXPO_PUBLIC_API_URL, {
      query: { token: props.token, app: props.app, practiceId: practice.id },
    })

    socket.on('error', e => {
      alert('error:' + e)
    })

    socket.onAny((event, ...args) => {
      DeviceEventEmitter.emit('socket event', { type: event, data: args[0] })
    })

    return () => {
      socket?.off('error')
      socket?.off('new message')
    }
  }, [props.token, props.app, practice?.id])

  return <Context.Provider value={{}}>{props.children}</Context.Provider>
}
