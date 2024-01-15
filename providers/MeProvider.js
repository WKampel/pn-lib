import GET_ME from '../../queries/GetAdminMeQuery'
import MeContext from '../contexts/MeContext'
import useQuery from '../hooks/useQuery'

const MeProvider = ({ children }) => {
  const { data, exec } = useQuery(GET_ME)
  const me = data?.me || {}

  return <MeContext.Provider value={{ ...me, refetch: exec }}>{children}</MeContext.Provider>
}

export default MeProvider
