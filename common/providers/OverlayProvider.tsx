import { ReactNode, useState } from 'react'
import { View } from 'react-native'
import { OverlayContext } from '../contexts/OverlayContext'

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [overlay, setOverlay] = useState<ReactNode>(null)

  return (
    <OverlayContext.Provider value={{ setOverlay }}>
      {children}
      <View pointerEvents='box-none' style={{ zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {overlay}
      </View>
    </OverlayContext.Provider>
  )
}
