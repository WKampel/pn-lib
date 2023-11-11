import { Text } from 'react-native'
import A from '../components/A'
import Card from '../components/Card'
import RegularIcon from '../components/RegularIcon'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_ALL_REVIEW_LINKS from '../queries/GET_ALL_REVIEW_LINKS'

const PatientReviewLinksScreen = ({ data: propData }) => {
  const { data } = useQuery(GET_ALL_REVIEW_LINKS)
  const reviewLinks = propData || data?.allReviewLinks || []

  return (
    <Screen>
      <Card scroll>
        <Text>We'd love to hear from you. Leave a review by clicking on the review source below. It will redirect you to that platform!</Text>
        {reviewLinks.map(link => (
          <A key={link.id} href={link.link || ''}>
            <RegularIcon identifier={link.icon} /> {link.name}
          </A>
        ))}
      </Card>
    </Screen>
  )
}

export default PatientReviewLinksScreen
