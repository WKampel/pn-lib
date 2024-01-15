import { useFocusEffect } from '@react-navigation/native'
import React, { ReactNode, useCallback, useState } from 'react'
import { DeviceEventEmitter } from 'react-native'
import io, { Socket } from 'socket.io-client'
import { SocketContext } from '../contexts/SocketContext'
import { usePractice } from '../hooks/usePractice'

const API_URL = process.env.EXPO_PUBLIC_API_URL
const APP = process.env.EXPO_PUBLIC_APP

export const SocketProvider = ({ token, children }: { token: string | null; children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined)
  const practice = usePractice()

  useFocusEffect(
    useCallback(() => {
      if (!practice?.id) return
      if (!API_URL) throw new Error('API_URL is not defined')

      const newSocket = io(API_URL, {
        query: { token, app: APP, practiceId: practice.id },
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
    }, [token, practice?.id])
  )

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}
