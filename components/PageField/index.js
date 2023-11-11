import PageFieldImage from './PageFieldImage'
import PageFieldPdf from './PageFieldPdf'
import PageFieldText from './PageFieldText'
import PageFieldVideo from './PageFieldVideo'

const PageField = ({ field }) => {
  if (field.type === 'text') return <PageFieldText {...field} />
  if (field.type === 'pdf') return <PageFieldPdf {...field} />
  if (field.type === 'image') return <PageFieldImage {...field} />
  if (field.type === 'video') return <PageFieldVideo {...field} />
}

export default PageField
