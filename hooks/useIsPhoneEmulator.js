import { useContext } from 'react'
import PhoneContext from '../contexts/PhoneContext'

const useIsPhoneEmulator = () => useContext(PhoneContext)

export default useIsPhoneEmulator
