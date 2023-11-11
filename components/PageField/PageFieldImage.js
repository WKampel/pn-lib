import { useMemo } from 'react'
import ImageAutoHeight from '../../components/ImageAutoHeight'

const PageFieldImage = ({ file, size, align }) => {
  const sizeValue = useMemo(() => {
    if (size === 'small') return '50%'
    if (size === 'medium') return '75%'
    return '100%'
  }, [size])

  const alignValue = useMemo(() => {
    if (align === 'left') return 'flex-start'
    if (align === 'right') return 'flex-end'
    return 'center'
  }, [align])

  return (
    <ImageAutoHeight
      style={{
        width: sizeValue,
        alignSelf: alignValue,
      }}
      src={file?.url}
    />
  )
}

export default PageFieldImage
