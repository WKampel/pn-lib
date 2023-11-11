import { Platform } from 'react-native'
import useIsPhoneEmulator from './useIsPhoneEmulator'

// Checks if the device is a mobile device or phone emulator
const useIsMobile = () => {
  const isPhoneEmulator = useIsPhoneEmulator()
  return Platform.OS === 'android' || Platform.OS === 'ios' || isPhoneEmulator
}

export default useIsMobile
