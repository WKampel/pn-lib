import { ScrollView, Text, View } from 'react-native'
import { GetServiceQuery, GetServiceQueryVariables, Service as GqlService } from '../../gql/graphql'
import { Screen } from '../common/components/Screen'
import { SolidButton } from '../common/components/buttons/SolidButton'
import { DentalIcon } from '../common/components/icons/DentalIcon'
import { useNav } from '../common/hooks/useNav'
import { usePracticeQuery } from '../common/hooks/usePracticeQuery'
import { useTheme } from '../common/hooks/useTheme'
import { GetService } from '../queries/GetServiceQuery'

export const PatientServiceScreen = ({ data: propData }: { data?: Omit<GqlService, 'id'> }) => {
  const { data } = usePracticeQuery<GetServiceQuery, GetServiceQueryVariables>(GetService)
  const service = propData || data?.service || { name: '', desc: '', icon: '' }
  const tokens = useTheme()
  const nav = useNav()

  return (
    <Screen>
      <ScrollView style={{ flex: 1, gap: tokens.spacing_l }}>
        <View style={{ flexDirection: 'row' }}>
          {service.icon ? <DentalIcon id={service.icon} size={80} /> : null}
          <Text>service.name</Text>
        </View>

        <Text>{service.desc}</Text>

        <View style={{ marginTop: 'auto' }}>
          <SolidButton text='Schedule Appointment' onPress={() => nav.navigate('RequestAppointment')} />
        </View>
      </ScrollView>
    </Screen>
  )
}
