import { Pressable, Text, View } from 'react-native'
import { styled } from '../libs/wakui'
import Card from './Card'
import Group from './Group'
import Image from './Image'

const PracticeCard = styled(
  ({ isHovered }) => ({
    style: {
      color: 'black',
      flexDirection: 'row',
      marginLeft: isHovered ? 10 : 0,
    },
    defaultVariants: {
      size: 'm',
    },
    variants: {
      size: {
        s: {
          imageStyle: {
            width: 100,
            height: 100,
          },
        },
        m: {
          imageStyle: {
            width: 125,
            height: 125,
          },
        },
        l: {
          imageStyle: {
            width: 150,
            height: 150,
          },
        },
      },
    },
  }),
  ({ style, imageStyle, children, onPress, onPressIn, onPressOut, onMouseEnter, onMouseLeave, logoUrl, size }) => {
    return (
      <Pressable onHoverIn={onMouseEnter} onHoverOut={onMouseLeave} onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
        <Card size={size}>
          <Group x>
            <Image width={imageStyle.width} height={imageStyle.height} src={logoUrl} />
            {children}
          </Group>
        </Card>
      </Pressable>
    )
  }
)

PracticeCard.Body = styled(
  () => ({
    color: 'black',
    size: 'm',
    nameStyle: {
      color: '$color.primary',
    },
    sloganStyle: {},
    variants: {
      size: {
        s: {},
        m: {},
        l: {},
      },
    },
  }),
  ({ style, children, name, slogan, nameStyle, sloganStyle }) => {
    return (
      <View style={style}>
        <Text style={nameStyle}>{name}</Text>
        <Text style={sloganStyle}>{slogan}</Text>
        {children}
      </View>
    )
  }
)

export default PracticeCard
