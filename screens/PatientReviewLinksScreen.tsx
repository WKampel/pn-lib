import { ScrollView, Text } from 'react-native'
import { GetAllReviewLinksQuery, GetAllReviewLinksQueryVariables, ReviewLink as GqlReviewLink } from '../../gql/graphql'
import { ReviewLink } from '../common/components/ReviewLink'
import { Screen } from '../common/components/Screen'
import { usePracticeQuery } from '../common/hooks/usePracticeQuery'
import { useTheme } from '../common/hooks/useTheme'
import { GetAllReviewLinks } from '../queries/GetAllReviewLinksQuery'

export const PatientReviewLinksScreen = ({ data: propData }: { data?: GqlReviewLink[] }) => {
  const { data } = usePracticeQuery<GetAllReviewLinksQuery, GetAllReviewLinksQueryVariables>(GetAllReviewLinks)
  const reviewLinks = propData || data?.allReviewLinks || []
  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1, gap: tokens.spacing_l }}>
        <Text>We'd love to hear from you. Leave a review by clicking on the review source below. It will redirect you to that platform!</Text>
        {reviewLinks.map(link => (
          <ReviewLink key={link.id} link={link.link} icon={link.icon} name={link.name} />
        ))}
      </ScrollView>
    </Screen>
  )
}
