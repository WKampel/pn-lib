import { Pdf } from '../../common/components/Pdf'

export const PagePdfRenderer = ({ src }: { src: string }) => {
  return <Pdf style={{ width: '100%', height: '100%' }} src={src} />
}
