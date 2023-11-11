import { ScrollView, Text } from 'react-native'
import Group from '../components/Group'
import Link from '../components/Link'
import RegularIcon from '../components/RegularIcon'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_ALL_REVIEW_LINKS from '../queries/GET_ALL_REVIEW_LINKS'

const PatientReviewLinksScreen = ({ data: propData }) => {
  const { data } = useQuery(GET_ALL_REVIEW_LINKS)
  const reviewLinks = propData || data?.allReviewLinks || []

  return (
    <Screen>
      <ScrollView>
        <Group>
          <Text>We'd love to hear from you. Leave a review by clicking on the review source below. It will redirect you to that platform!</Text>
          {reviewLinks.map(link => (
            <Link key={link.id} to={link.link || ''}>
              <RegularIcon identifier={link.icon} /> {link.name}
            </Link>
          ))}
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default PatientReviewLinksScreen
