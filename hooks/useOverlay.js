import { useContext } from 'react'
import OverlayContext from '../contexts/OverlayContext'

const useOverlay = () => useContext(OverlayContext)

export default useOverlay
