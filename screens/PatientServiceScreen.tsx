import { ScrollView, View } from 'react-native'
import { Service as GqlService } from '../../gql/graphql'
import { H } from '../common/components/H'
import { Icon } from '../common/components/Icon'
import { Screen } from '../common/components/Screen'
import { SolidButton } from '../common/components/buttons/SolidButton'
import { serviceIconSet } from '../common/config/serviceIconSet'
import { useTheme } from '../common/hooks/useTheme'
import { PageHtmlRenderer } from '../contentManagement/components/PageHtmlRenderer'

export const PatientServiceScreen = ({ data, onPressScheduleAppointment }: { data: Omit<GqlService, 'id'>; onPressScheduleAppointment?: () => void }) => {
  const tokens = useTheme()

  return (
    <Screen>
      <View style={{ gap: tokens.spacing_xl, flex: 1 }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', gap: tokens.spacing_l }}>
          {data.icon ? <Icon set={serviceIconSet} id={data.icon} size={40} /> : null}
          <H>{data.name}</H>
        </View>

        <ScrollView contentContainerStyle={{ paddingHorizontal: tokens.spacing_s }} style={{ flex: 1 }}>
          {data.desc ? <PageHtmlRenderer html={data.desc} /> : null}
        </ScrollView>

        <View style={{ paddingHorizontal: tokens.spacing_s }}>
          <SolidButton text='Schedule Appointment' onPress={onPressScheduleAppointment} />
        </View>
      </View>
    </Screen>
  )
}
