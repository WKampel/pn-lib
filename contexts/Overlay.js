import { createContext, useContext, useEffect } from 'react'
import { Pressable, View } from 'react-native'
import useState from '../hooks/useState'

const Context = createContext()

const useOverlay = () => useContext(Context)

export const OverlayProvider = props => {
  const overlay = useState(undefined)

  return (
    <Context.Provider value={{ setOverlay: overlay.set }}>
      {props.children}
      <View pointerEvents='box-none' style={{ zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {overlay.val}
      </View>
    </Context.Provider>
  )
}

export const Overlay = ({ visible, relativeToRef, close, children }) => {
  const { setOverlay } = useOverlay()

  useEffect(() => {
    // Unmount
    return () => {
      setOverlay(undefined)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      relativeToRef.current.measureInWindow((x, y, width, height) => {
        setOverlay(
          <Pressable onPress={close} style={{ backgroundColor: 'rgba(0,0,0,.2)', flex: 1, cursor: 'pointer' }}>
            <View pointerEvents='box-none' style={{ position: 'absolute', top: y + height, left: x }}>
              {children}
            </View>
          </Pressable>
        )
      })
    } else {
      setOverlay(undefined)
    }
  }, [visible])

  return <></>
}
