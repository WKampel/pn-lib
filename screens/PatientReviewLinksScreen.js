import * as Linking from 'expo-linking'
import { Text, View } from 'react-native'
import Card from '../components/Card'
import RegularIcon from '../components/RegularIcon'
import Screen from '../components/Screen'
import TouchableCard from '../components/TouchableCard'
import { usePracticeQuery } from '../hooks/usePracticeQuery'
import useStyles from '../hooks/useStyles'
import GET_ALL_REVIEW_LINKS from '../queries/GET_ALL_REVIEW_LINKS'

const PatientReviewLinksScreen = ({ data: propData }) => {
  const { data } = usePracticeQuery(GET_ALL_REVIEW_LINKS)
  const reviewLinks = propData || data?.allReviewLinks || []

  const styles = useStyles(styleConfig)

  return (
    <Screen>
      <Card style={{ flexGrow: 1 }} scroll>
        <Text>We'd love to hear from you. Leave a review by clicking on the review source below. It will redirect you to that platform!</Text>
        {reviewLinks.map(link => (
          <TouchableCard onPress={() => Linking.openURL(link.link)} hideBorderOnMobile={false}>
            <View style={styles.linkContainer}>
              <RegularIcon size={styles.link.fontSize} color={styles.link.color} identifier={link.icon} />
              <Text style={styles.link}>{link.name}</Text>
            </View>
          </TouchableCard>
        ))}
      </Card>
    </Screen>
  )
}

const styleConfig = {
  base: {
    link: {
      fontSize: '$font-size-l',
    },
    linkContainer: {
      flexDirection: 'row',
      gap: '$spacing-m',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}

export default PatientReviewLinksScreen
