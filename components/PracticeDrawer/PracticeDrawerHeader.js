import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useMe from '../../hooks/useMe'
import usePractice from '../../hooks/usePractice'
import useStyles from '../../hooks/useStyles'
import mobileStyles from '../../utils/mobileStyles'
import Image from '../Image'

const PracticeDrawerHeader = () => {
  const practice = usePractice()
  const insets = useSafeAreaInsets()

  const styles = useStyles(styleConfig)

  return (
    <View style={[styles.header, mobileStyles({ paddingTop: insets.top })]}>
      <Image contentFit='contain' style={styles.logo} source={practice?.logo?.url} />
      <View style={styles.content}>
        <Text style={styles.practiceName}>{practice?.name}</Text>
        <Text style={styles.slogan}>{practice?.slogan}</Text>
        <ProfileBubble styles={styles} />
      </View>
    </View>
  )
}

const ProfileBubble = ({ styles }) => {
  const me = useMe()

  return (
    <View style={styles.profileBubble}>
      <AntDesign name='user' size={styles.userName.fontSize} color={styles.userName.color} />
      <Text style={styles.userName}>{me.fullName}</Text>
    </View>
  )
}

const styleConfig = {
  base: {
    header: {
      backgroundColor: '$color-ui-primary',
      flexDirection: 'row',
      paddingHorizontal: '$spacing-m',
      paddingVertical: '$spacing-xl',
      gap: '$spacing-s',
    },
    content: {
      gap: '$spacing-xs',
    },
    logo: {
      width: 50,
      height: 50,
      borderRadius: '$radius-s',
    },
    practiceName: {
      color: '$color-text-on-primary',
      fontSize: '$font-size-l',
      fontWeight: '$weight-heavy',
    },
    slogan: {
      color: '$color-text-on-primary-subtle',
      fontSize: '$font-size-s',
    },
    profileBubble: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: '$radius-round',
      borderColor: '$color-border-on-surface',
      paddingHorizontal: '$spacing-s',
      paddingVertical: '$spacing-xs',
      alignSelf: 'flex-start',
      gap: '$spacing-xs',
    },
    userName: {
      color: '$color-text-on-primary',
      fontSize: '$font-size-s',
    },
  },
}

export default PracticeDrawerHeader
