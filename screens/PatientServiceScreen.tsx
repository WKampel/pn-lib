import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Service as GqlService } from '../../gql/graphql'
import { H } from '../common/components/H'
import { Icon } from '../common/components/Icon'
import { Screen } from '../common/components/Screen'
import { SolidButton } from '../common/components/buttons/SolidButton'
import { serviceIconSet } from '../common/config/serviceIconSet'
import { useTheme } from '../common/hooks/useTheme'
import { PageHtmlRenderer } from '../contentManagement/components/PageHtmlRenderer'

export const PatientServiceScreen = ({ data, onPressScheduleAppointment }: { data: Omit<GqlService, 'id'>; onPressScheduleAppointment?: () => void }) => {
  const { tokens } = useTheme()
  const insets = useSafeAreaInsets()

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            gap: tokens.spacing_l,
            paddingVertical: tokens.spacing_m,
            width: '100%',
            borderWidth: 1,
            backgroundColor: tokens.color_bg_surface_alt,
            borderColor: tokens.color_border_on_surface,
          }}
        >
          {data.icon ? <Icon set={serviceIconSet} id={data.icon} size={40} /> : null}
          <H>{data.name}</H>
        </View>

        <View style={{ paddingHorizontal: tokens.spacing_s, flex: 1 }}>{data.desc ? <PageHtmlRenderer html={data.desc} /> : null}</View>

        <View style={{ paddingHorizontal: tokens.spacing_s, paddingBottom: insets.bottom }}>
          <SolidButton text='Request Appointment' onPress={onPressScheduleAppointment} />
        </View>
      </View>
    </Screen>
  )
}
