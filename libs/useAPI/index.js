const { useState, useEffect } = require('react')
const { useNavigation, useIsFocused } = require('@react-navigation/native')

const useAPI = (apiCall, options = {}) => {
  const isFocused = useIsFocused()

  const [data, setData] = useState(null)
  const [total, setTotal] = useState(0)
  const [error, setError] = useState()
  const [status, setStatus] = useState(null)
  const [errorData, setErrorData] = useState([])

  const navigation = useNavigation()

  const exec = async params => {
    setError(null)
    setData(null)
    setStatus('loading')
    try {
      const response = await apiCall(params)
      setData(response.data.data)
      setTotal(parseInt(response.data.total))
      setStatus('success')
    } catch (e) {
      const err = e?.response?.data?.error?.message || e || 'There was a problem with the request.'
      setError(err)
      setTotal(0)
      let newErrorData = { ...e?.response?.data?.error }
      delete newErrorData.message
      setErrorData(newErrorData)
      setStatus('error')
    }
  }

  useEffect(() => {
    if (status === 'success') {
      if (options.onSuccess) options.onSuccess()
      if (options.redirectOnSuccess) navigation.navigate(options.redirectOnSuccess)
    } else if (status === 'error') {
      if (options.onError) options.onError()
      if (options.alertOnError) alert(error)
    }
  }, [status])

  useEffect(() => {
    if (options.autoExec) exec()
  }, [isFocused])

  return {
    data,
    total,
    error,
    exec,
    status,
    ...errorData,
  }
}

export default useAPI
