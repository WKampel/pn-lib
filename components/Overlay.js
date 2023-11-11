import { useEffect } from 'react'
import { Pressable, View } from 'react-native'
import useOverlay from '../hooks/useOverlay'

const Overlay = ({ visible, relativeToRef, close, children }) => {
  const { setOverlay } = useOverlay()

  // Unmount
  useEffect(() => {
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

export default Overlay
