import { useNavigation } from '@react-navigation/native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import ServiceCard from '../components/ServiceCard'
import { usePracticeQuery } from '../hooks/usePracticeQuery'
import GET_ACTIVE_SERVICES from '../queries/GET_ACTIVE_SERVICES'

const PatientServicesScreen = ({}) => {
  const { data } = usePracticeQuery(GET_ACTIVE_SERVICES)
  const services = data?.activeServices || []

  const nav = useNavigation()

  return (
    <Screen>
      <Card scroll>
        {services.map(service => (
          <ServiceCard key={service.id} name={service.name} icon={service.icon} onPress={() => nav.navigate('Service', { id: service.id })} />
        ))}
      </Card>
    </Screen>
  )
}

export default PatientServicesScreen
