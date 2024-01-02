import { Text } from 'react-native'
import PageFieldImage from './PageFieldImage'
import PageFieldPdf from './PageFieldPdf'
import PageFieldText from './PageFieldText'
import PageFieldVideo from './PageFieldVideo'

const PageField = ({ field }) => {
  if (field.type === 'TEXT') return <PageFieldText {...field} />
  if (field.type === 'PDF') return <PageFieldPdf {...field} />
  if (field.type === 'IMAGE') return <PageFieldImage {...field} />
  if (field.type === 'VIDEO') return <PageFieldVideo {...field} />
  return <Text>Unknown field type: {field.type}</Text>
}

export default PageField
