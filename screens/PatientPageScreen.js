import { ScrollView } from 'react-native'
import Group from '../components/Group'
import PageField from '../components/PageField'
import Screen from '../components/Screen'
// import useQuery from '../hooks/useQuery'
// import GET_PAGE from '../queries/GET_PAGE'

const PatientPageScreen = ({ data = {} }) => {
  // const { data: queryData } = useQuery(GET_PAGE, { variables: { id, name }, displayError: true })
  // const data = propData || queryData?.page || {}

  return (
    <Screen>
      <ScrollView>
        <Group style={{ flex: 1 }}>
          {data?.fields?.map(field => (
            <PageField key={field.id} field={field} />
          ))}
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default PatientPageScreen
