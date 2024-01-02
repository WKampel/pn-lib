import { useMemo } from 'react'
import ImageAutoHeight from '../../components/ImageAutoHeight'

const PageFieldImage = ({ file, size, align }) => {
  const sizeValue = useMemo(() => {
    if (size === 'SMALL') return '50%'
    if (size === 'MEDIUM') return '75%'
    return '100%'
  }, [size])

  const alignValue = useMemo(() => {
    if (align === 'LEFT') return 'flex-start'
    if (align === 'RIGHT') return 'flex-end'
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
