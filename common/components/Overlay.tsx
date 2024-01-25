import React, { ReactNode, RefObject, useEffect } from 'react'
import { Pressable, View } from 'react-native'
import { useOverlay } from '../hooks/useOverlay'

type OverlayProps = {
  visible: boolean
  relativeToRef: RefObject<View>
  close: () => void
  children: ReactNode
}

export const Overlay = ({ visible, relativeToRef, close, children }: OverlayProps) => {
  const { setOverlay } = useOverlay()

  // Unmount
  useEffect(() => {
    return () => {
      setOverlay(undefined)
    }
  }, [setOverlay])

  useEffect(() => {
    if (visible && relativeToRef.current) {
      relativeToRef.current.measureInWindow((x, y, width, height) => {
        setOverlay(
          <Pressable
            onPress={close}
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              flex: 1,
              // @ts-ignore
              cursor: 'pointer',
            }}
          >
            <View pointerEvents='box-none' style={{ position: 'absolute', top: y + height, left: x }}>
              {children}
            </View>
          </Pressable>
        )
      })
    } else {
      setOverlay(undefined)
    }
  }, [visible, relativeToRef, close, setOverlay, children])

  return null
}
