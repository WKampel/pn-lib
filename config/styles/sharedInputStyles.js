const sharedInputStyles = {
  base: {
    container: {
      borderWidth: 1,
      borderColor: '$color-border-on-surface',
      justifyContent: 'center',
      '@hovered': {
        borderColor: '$color-border-on-surface-intense',
      },
      '@focused': {
        borderColor: '$color-ui-primary',
      },
      '@disabled': {
        backgroundColor: '$color-bg-surface-disabled',
        borderWidth: 0,
      },
    },
    input: {
      outline: 'none',
    },
    label: {
      color: '$color-text-on-surface-subtle',
    },
  },
  round: {
    true: {
      container: {
        borderRadius: '$radius-round',
      },
    },
  },
  size: {
    s: {
      container: {
        height: '$size-s',
        borderRadius: '$radius-xs',
        paddingHorizontal: '$spacing-s',
      },

      input: {
        fontSize: '$font-size-xs',
      },
      label: {
        fontSize: '$font-size-xs',
      },
    },
    m: {
      container: {
        height: '$size-m',
        borderRadius: '$radius-xs',
        paddingHorizontal: '$spacing-s',
      },
      input: {
        fontSize: '$font-size-xs',
      },
      label: {
        fontSize: '$font-size-xs',
      },
    },
  },
}

export default sharedInputStyles
