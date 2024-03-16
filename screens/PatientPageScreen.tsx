import { Text, View } from 'react-native'
import { Page } from '../../gql/graphql'
import { useTheme } from '../common/hooks/useTheme'
import { PageHtmlRenderer } from '../contentManagement/components/PageHtmlRenderer'
import { PagePdfRenderer } from '../contentManagement/components/PagePdfRenderer'

export const PatientPageScreen = ({ data }: { data: Omit<Page, 'id' | 'active'> }) => {
  const { tokens } = useTheme()
  const { html, pdf, type } = data
  if (type === 'HTML') {
    if (!html) {
      return <Text></Text>
    }
    return <PageHtmlRenderer html={html} />
  } else if (type === 'PDF') {
    if (!pdf?.url) {
      return <Text></Text>
    }
    return (
      <View style={{ padding: tokens.spacing_s, flex: 1 }}>
        <PagePdfRenderer src={pdf.url} />
      </View>
    )
  } else {
    return <Text>No page type</Text>
  }
}
