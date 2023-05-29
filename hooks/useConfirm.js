import { useState } from 'react'

const useConfirm = () => {
  const [resolver, setResolver] = useState({ resolver: null })

  const createPromise = () => {
    let resolver
    return [
      new Promise((resolve, reject) => {
        resolver = resolve
      }),
      resolver,
    ]
  }

  const getConfirmation = async () => {
    const [promise, resolve] = await createPromise()
    setResolver({ resolve })
    return promise
  }

  const confirm = status => {
    resolver.resolve(status)
  }

  return { getConfirmation, confirm }
}

export default useConfirm
