import { useContext } from 'react'
import { PhoneContext } from '../contexts/PhoneContext'

export const useIsPhoneEmulator = () => useContext(PhoneContext)
