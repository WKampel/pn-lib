import { useContext } from 'react'
import MeContext from '../contexts/MeContext'

const useMe = () => useContext(MeContext)

export default useMe
