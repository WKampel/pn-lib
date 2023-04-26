const { createContext } = require('react')

const Context = createContext()

const Provider = ({ value, children }) => {
  let styles = {}
  styles.primaryColor = value?.primaryColor || '#69b4f5'

  return <Context.Provider value={styles}>{children}</Context.Provider>
}

export { Provider, Context }
