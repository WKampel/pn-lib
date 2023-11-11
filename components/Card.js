import useIsMobile from '../hooks/useIsMobile'
import useStyles from '../hooks/useStyles'
import OptionalScroll from './OptionalScroll'

const Card = ({ children, style, scroll = false }) => {
  const mobile = useIsMobile()

  const styles = useStyles(styleConfig, { mobile })

  return (
    <OptionalScroll scroll={scroll} scrollViewStyle={styles.scrollView} containerStyle={[styles.container, style]}>
      {children}
    </OptionalScroll>
  )
}

const styleConfig = {
  base: {
    scrollView: {
      padding: '$spacing-l',
      gap: '$spacing-l',
    },
    container: {
      borderWidth: 1,
      borderColor: '$color-border-on-surface',
      borderRadius: '$radius-s',
      backgroundColor: '$color-bg-surface',
      flexGrow: 0,
    },
  },
  mobile: {
    true: {
      container: {
        borderWidth: 0,
      },
    },
  },
}

export default Card
