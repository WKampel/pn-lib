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
    const socket = io('http://192.168.8.22:3050', {
      query: { token: props.token, app: props.app, practiceId: practice.id },
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
  }, [props.token, props.app, practice?.id])

  return <Context.Provider value={{}}>{props.children}</Context.Provider>
}
