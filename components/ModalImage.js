import React from 'react'
import useModal from '../hooks/useModal'
import Image from './Image'

export default ({ src, style }) => {
  const modal = useModal(
    <>
      <Image
        style={{
          width: 500,
          height: 500,
        }}
        src={src}
      />
    </>
  )

  return (
    <>
      {modal.render}
      <Image onPress={modal.open} style={style} src={src} />
    </>
  )
}
