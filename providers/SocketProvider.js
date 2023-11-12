import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { DeviceEventEmitter } from 'react-native'
import io from 'socket.io-client'
import SocketContext from '../contexts/SocketContext'
import usePractice from '../hooks/usePractice'

const SocketProvider = ({ token, children }) => {
  const [socket, setSocket] = useState(null)
  const practice = usePractice()

  useFocusEffect(
    useCallback(() => {
      const newSocket = io(process.env.EXPO_PUBLIC_API_URL, {
        query: { token, app: process.env.EXPO_PUBLIC_APP, practiceId: practice.id },
      })

      setSocket(newSocket)

      newSocket.on('error', e => {
        console.error('Socket error:', e)
      })

      newSocket.onAny((event, ...args) => {
        DeviceEventEmitter.emit('socket event', { type: event, data: args[0] })
      })

      return () => {
        newSocket.off('error')
        newSocket.offAny()
        newSocket.disconnect()
      }
    }, [token, practice.id])
  )

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}

export default SocketProvider
