import { createContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

export const Context = createContext({})

export const Provider = props => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const socket = io('http://localhost:3050', {
      query: { token: props.token },
    })
    setSocket(socket)

    socket.on('error', e => {
      alert('error:' + e)
    })
  }, [])

  return <Context.Provider value={socket}>{props.children}</Context.Provider>
}
