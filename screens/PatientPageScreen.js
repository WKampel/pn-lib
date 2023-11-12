import PageField from '../components/PageField'
import Screen from '../components/Screen'
// import useQuery from '../hooks/useQuery'
// import GET_PAGE from '../queries/GET_PAGE'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Card from '../components/Card'

const PatientPageScreen = ({ data = {} }) => {
  // const { data: queryData } = useQuery(GET_PAGE, { variables: { id, name }, displayError: true })
  // const data = propData || queryData?.page || {}
  const insets = useSafeAreaInsets()

  return (
    <Screen>
      <Card style={{ paddingBottom: insets.bottom }} scroll>
        {data?.fields?.map(field => (
          <PageField key={field.id} field={field} />
        ))}
      </Card>
    </Screen>
  )
}

export default PatientPageScreen
