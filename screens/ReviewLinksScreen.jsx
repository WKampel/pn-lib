import { gql } from '@apollo/client'
import { ScrollView, Text } from 'react-native'
import Group from '../components/Group'
import Icon from '../components/Icon'
import Link from '../components/Link'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'

const GET_REVIEWLINKS = gql`
  query {
    allReviewLinks {
      id
      link
      icon
    }
  }
`

const ReviewLinksScreen = ({}) => {
  const { data } = useQuery(GET_REVIEWLINKS)
  const reviewLinks = data?.allReviewLinks || []

  return (
    <Screen>
      <ScrollView>
        <Group>
          <Text>We'd love to hear from you. Leave a review by clicking on the review source below. It will redirect you to that platform!</Text>
          {reviewLinks.map(link => (
            <Link href={link.link}>
              <Icon val={link.icon} /> {link.link}
            </Link>
          ))}
        </Group>
      </ScrollView>
    </Screen>
  )
}

export default ReviewLinksScreen
