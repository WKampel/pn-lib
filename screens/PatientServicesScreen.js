import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Group from '../components/Group'
import Screen from '../components/Screen'
import ServiceCard from '../components/ServiceCard'
import useQuery from '../hooks/useQuery'
import GET_ACTIVE_SERVICES from '../queries/GET_ACTIVE_SERVICES'

const PatientServicesScreen = ({}) => {
  const { data } = useQuery(GET_ACTIVE_SERVICES)
  const services = data?.activeServices || []

  const nav = useNavigation()

  return (
    <Screen>
      <ScrollView>
        <Group>
          {services.map(service => (
            <ServiceCard key={service.id} name={service.name} icon={service.icon} onPress={() => nav.navigate('ViewService', { id: service.id })} />
          ))}
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default PatientServicesScreen
