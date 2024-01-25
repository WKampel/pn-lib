import { ScrollView, Text } from 'react-native'
import { ReviewLink as GqlReviewLink } from '../../gql/graphql'
import { ReviewLink } from '../common/components/ReviewLink'
import { Screen } from '../common/components/Screen'
import { useTheme } from '../common/hooks/useTheme'

export const PatientReviewLinksScreen = ({ data }: { data: GqlReviewLink[] }) => {
  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: tokens.spacing_m, paddingHorizontal: tokens.spacing_m }}>
        <Text>We'd love to hear from you. Leave a review by clicking on the review source below. It will redirect you to that platform!</Text>
        {data.map(link => (
          <ReviewLink key={link.id} link={link.link} icon={link.icon} name={link.name} />
        ))}
      </ScrollView>
    </Screen>
  )
}
