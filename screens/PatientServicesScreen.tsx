import { ScrollView } from 'react-native'
import { GetActiveServicesQuery, GetActiveServicesQueryVariables } from '../../gql/graphql'
import { Screen } from '../common/components/Screen'
import { Service } from '../common/components/Service'
import { useNav } from '../common/hooks/useNav'
import { usePracticeQuery } from '../common/hooks/usePracticeQuery'
import { GetActiveServices } from '../queries/GetActiveServicesQuery'

export const PatientServicesScreen = () => {
  const { data } = usePracticeQuery<GetActiveServicesQuery, GetActiveServicesQueryVariables>(GetActiveServices, { variables: {} })
  const services = data?.activeServices || []

  const nav = useNav()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        {services.map(service => (
          <Service key={service.id} name={service.name} icon={service.icon} onPress={() => nav.navigate('Service', { id: service.id })} />
        ))}
      </ScrollView>
    </Screen>
  )
}
