import { ScrollView } from 'react-native'
import { GetActiveServicesQuery, GetActiveServicesQueryVariables } from '../../gql/graphql'
import { Screen } from '../common/components/Screen'
import { Service } from '../common/components/Service'
import { usePracticeQuery } from '../common/hooks/usePracticeQuery'
import { useTheme } from '../common/hooks/useTheme'
import { GetActiveServices } from '../queries/GetActiveServicesQuery'

export const PatientServicesScreen = ({ onPressService }: { onPressService?: (serviceId: string) => void }) => {
  const { data } = usePracticeQuery<GetActiveServicesQuery, GetActiveServicesQueryVariables>(GetActiveServices, { variables: {} })
  const services = data?.activeServices || []

  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: tokens.spacing_m, paddingHorizontal: tokens.spacing_m }}>
        {services.map(service => (
          <Service key={service.id} name={service.name} icon={service.icon} onPress={() => onPressService?.(service.id)} />
        ))}
      </ScrollView>
    </Screen>
  )
}
