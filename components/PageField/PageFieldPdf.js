import Pdf from '../../components/Pdf'

const PageFieldPdf = ({ file }) => {
  return <Pdf src={file?.url} />
}

export default PageFieldPdf
