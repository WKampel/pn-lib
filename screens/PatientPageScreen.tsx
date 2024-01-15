import { ScrollView, Text } from 'react-native'
import { PageType } from '../../contentManagement/types/PageType'
import { useTheme } from '../common/hooks/useTheme'
import { PageHtmlRenderer } from '../contentManagement/components/PageHtmlRenderer'
import { PagePdfRenderer } from '../contentManagement/components/PagePdfRenderer'

type PatientPageScreenProps = {
  html?: string
  pdfUrl?: string
  type: PageType
}

export const PatientPageScreen = (props: PatientPageScreenProps) => {
  const tokens = useTheme()
  const { html, pdfUrl, type } = props
  if (type === 'HTML') {
    if (!html) {
      return <Text></Text>
    }
    return (
      <ScrollView contentContainerStyle={{ padding: tokens.spacing_s }}>
        <PageHtmlRenderer html={html} />
      </ScrollView>
    )
  } else if (type === 'PDF') {
    if (!pdfUrl) {
      return <Text></Text>
    }
    return <PagePdfRenderer src={pdfUrl} />
  } else {
    return <Text>No page type</Text>
  }
}
