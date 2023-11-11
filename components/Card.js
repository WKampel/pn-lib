import useIsMobile from '../hooks/useIsMobile'
import useStyles from '../hooks/useStyles'
import OptionalScroll from './OptionalScroll'

const Card = ({ children, style, scroll = false, hideBorderOnMobile = true }) => {
  const mobile = useIsMobile()

  const styles = useStyles(styleConfig, { hiddenBorder: hideBorderOnMobile && mobile })

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
  hiddenBorder: {
    true: {
      container: {
        borderWidth: 0,
      },
    },
  },
}

export default Card
