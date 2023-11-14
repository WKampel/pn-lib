import React, { useEffect, useRef } from 'react'
import { DeviceEventEmitter } from 'react-native'
import io from 'socket.io-client'
import SocketContext from '../contexts/SocketContext'
import usePractice from '../hooks/usePractice'

const SocketProvider = ({ token, children }) => {
  const socketRef = useRef(null)
  const practice = usePractice()

  useEffect(() => {
    const socket = io(process.env.EXPO_PUBLIC_API_URL, {
      query: { token, app: process.env.EXPO_PUBLIC_APP, practiceId: practice.id },
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
  }, [token, process.env.EXPO_PUBLIC_APP, practice?.id])

  return <SocketContext.Provider value={{ socket: socketRef.current }}>{children}</SocketContext.Provider>
}

export default SocketProvider
