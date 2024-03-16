import moment from 'moment'
import { Text, TouchableOpacity, View } from 'react-native'
import { Gender } from '../../../gql/graphql'
import { useTheme } from '../hooks/useTheme'
import { GenderIcon } from './GenderIcon'

type AppointmentProps = {
  desc?: string | null
  startDate: Date
  patientFirstName?: string | null
  patientLastName?: string | null
  patientGender?: Gender | null
  onPress?: () => void
  children?: React.ReactNode
}

const formatDateDisplay = (startDate: Date) => {
  if (moment(startDate).isSame(moment(), 'day')) {
    return `Today @ ${moment(startDate).format('h:mmA')}`
  }
  if (moment(startDate).isSame(moment().add(1, 'day'), 'day')) {
    return `Tomorrow @ ${moment(startDate).format('h:mmA')}`
  }
  return `${moment(startDate).format('MM/DD/YYYY')} @ ${moment(startDate).format('h:mmA')}`
}

export const Appointment = ({ desc, startDate, patientFirstName, patientLastName, patientGender, onPress, children }: AppointmentProps) => {
  const { tokens } = useTheme()

  return (
    <TouchableOpacity
      style={{
        gap: tokens.spacing_m,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: tokens.radius_s,
        borderWidth: 1,
        borderColor: tokens.color_border_on_surface,
        padding: tokens.spacing_s,
      }}
      onPress={onPress}
    >
      <View style={{ flex: 1, gap: tokens.spacing_xs }}>
        <Text style={{ fontSize: tokens.font_size_s, fontWeight: tokens.weight_semi_heavy, color: tokens.color_ui_primary }}>{formatDateDisplay(startDate)}</Text>
        <Text style={{ fontSize: tokens.font_size_s }}>{desc}</Text>
        {children}
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: tokens.spacing_xs,
          borderWidth: 1,
          borderColor: tokens.color_border_on_surface,
          padding: tokens.spacing_xs,
          borderRadius: tokens.radius_round,
        }}
      >
        {patientGender ? <GenderIcon gender={patientGender} color={tokens.color_text_on_surface} size={tokens.font_size_s} /> : null}
        <Text
          style={{
            fontSize: tokens.font_size_s,
          }}
        >
          {patientFirstName} {patientLastName}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
