import PhoneContext from '../contexts/PhoneContext'

// This allows components to know if they are within the phone simulator, for styling purposes.
const PhoneProvider = ({ children }) => {
  return <PhoneContext.Provider value={true}>{children}</PhoneContext.Provider>
}

export default PhoneProvider
