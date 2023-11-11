import { useState } from 'react'
import { View } from 'react-native'
import OverlayContext from '../contexts/OverlayContext'

const OverlayProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(undefined)

  return (
    <OverlayContext.Provider value={{ setOverlay }}>
      {children}
      <View pointerEvents='box-none' style={{ zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {overlay}
      </View>
    </OverlayContext.Provider>
  )
}

export default OverlayProvider
