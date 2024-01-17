import { ScrollView, Text, View } from 'react-native'
import { Service as GqlService } from '../../gql/graphql'
import { Screen } from '../common/components/Screen'
import { SolidButton } from '../common/components/buttons/SolidButton'
import { DentalIcon } from '../common/components/icons/DentalIcon'
import { useNav } from '../common/hooks/useNav'
import { useTheme } from '../common/hooks/useTheme'

export const PatientServiceScreen = ({ data }: { data: Omit<GqlService, 'id'> }) => {
  const tokens = useTheme()
  const nav = useNav()

  return (
    <Screen>
      <ScrollView style={{ flex: 1, gap: tokens.spacing_l }}>
        <View style={{ flexDirection: 'row' }}>
          {data.icon ? <DentalIcon id={data.icon} size={80} /> : null}
          <Text>{data.name}</Text>
        </View>

        <Text>{data.desc}</Text>

        <View style={{ marginTop: 'auto' }}>
          <SolidButton text='Schedule Appointment' onPress={() => nav.navigate('RequestAppointment')} />
        </View>
      </ScrollView>
    </Screen>
  )
}
