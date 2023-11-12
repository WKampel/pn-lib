import moment from 'moment'
import { Text, View } from 'react-native'
import GenderIcon from '../../pn-lib/components/GenderIcon'
import useStyles from '../hooks/useStyles'
import Group from './Group'
import TouchableCard from './TouchableCard'

const formatDateDisplay = startDate => {
  if (moment(startDate).isSame(moment(), 'day')) {
    return `Today @ ${moment(startDate).format('h:mmA')}`
  }
  if (moment(startDate).isSame(moment().add(1, 'day'), 'day')) {
    return `Tomorrow @ ${moment(startDate).format('h:mmA')}`
  }
  return `${moment(startDate).format('MM/DD/YYYY')} @ ${moment(startDate).format('h:mmA')}`
}

const Patient = ({ gender, firstName, lastName }) => {
  const styles = useStyles(styleConfig)

  return (
    <View style={styles.patient}>
      <GenderIcon gender={gender} size={styles.patientName.fontSize} />
      <Text style={styles.patientName}>
        {firstName} {lastName}
      </Text>
    </View>
  )
}

const AppointmentCard = ({ desc, startDate, patient, onPress, children }) => {
  const styles = useStyles(styleConfig)

  return (
    <TouchableCard style={styles.appointmentCard} onPress={onPress} hideBorderOnMobile={false}>
      <Group style={{ flex: 1 }} spacing='xs'>
        <Text style={styles.date}>{formatDateDisplay(startDate)}</Text>
        <Text style={styles.desc}>{desc}</Text>
        {children}
      </Group>
      <Patient gender={patient?.gender} firstName={patient?.firstName} lastName={patient?.lastName} />
    </TouchableCard>
  )
}

const styleConfig = {
  base: {
    appointmentCard: {
      backgroundColor: '$color-bg-surface',
      borderRadius: '$radius-xs',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '$spacing-m',
      gap: '$spacing-s',
    },
    patientName: {
      fontSize: '$font-size-s',
    },
    desc: {
      fontSize: '$font-size-s',
    },
    date: {
      fontSize: '$font-size-s',
      fontWeight: '$weight-heavy',
      color: '$color-ui-primary',
    },
    patient: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$spacing-xs',
      borderWidth: 1,
      borderColor: 'rgb(220,220,220)',
      padding: '$spacing-xs',
      borderRadius: '$radius-round',
    },
  },
}

export default AppointmentCard
