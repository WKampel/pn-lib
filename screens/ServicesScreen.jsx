import { gql } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Group from '../components/Group'
import Screen from '../components/Screen'
import ServiceCard from '../components/ServiceCard'
import useQuery from '../hooks/useQuery'

const GET_SERVICES = gql`
  query GetActiveServices {
    activeServices {
      id
      name
      desc
      active
      icon
    }
  }
`

const ServicesScreen = ({}) => {
  const { data } = useQuery(GET_SERVICES)
  const services = data?.activeServices || []

  const nav = useNavigation()

  return (
    <Screen>
      <ScrollView>
        <Group>
          {services.map(service => (
            <ServiceCard
              name={service.name}
              desc={service.desc}
              icon={service.icon}
              onPress={() => nav.navigate('View Service', { id: service.id })}
            />
          ))}
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default ServicesScreen
