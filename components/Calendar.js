import { FlashList } from '@shopify/flash-list'
import moment from 'moment'
import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
import Button from './Button'
import Spinner from './Spinner'

export default props => {
  const date = useState(new Date())
  const view = useState('month')
  const branding = useBranding()

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const startDate = moment(date.val).startOf('month').startOf('week')
  const endDate = startDate.clone().add(41, 'days')

  const getDaysBetweenDates = (start, end) => {
    let arr = []
    let dt = new Date(start)
    for (; dt <= new Date(end); dt.setDate(dt.getDate() + 1)) arr.push(new Date(dt))
    return arr
  }

  const renderEvent = ({ item }) => {
    return (
      <Pressable onPress={() => props.onEventPress(item)}>
        <Text style={branding.calendar.event.style}>{props.getEventLabel(item)}</Text>
      </Pressable>
    )
  }

  const events = [...props.events].sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

  useEffect(() => {
    if (props.onChangeVisibleDates) props.onChangeVisibleDates(startDate, endDate)
  }, [view.val, date.val])

  const days = getDaysBetweenDates(startDate, endDate)

  const prev = () => {
    if (view.val == 'month') {
      date.set(moment(date.val).subtract(1, 'month').toDate())
    }
  }

  const next = () => {
    if (view.val == 'month') {
      date.set(moment(date.val).add(1, 'month').toDate())
    }
  }
  return (
    <View>
      <View style={styles.controls}>
        <View style={[styles.controlsChild, styles.controlButtons]}>
          <Button text='<' style={styles.controlButton} onPress={prev} />
          <Button text='>' style={styles.controlButton} onPress={next} />
        </View>
        <Text style={[styles.controlsChild, styles.month]}>{moment(date.val).format('MMM YYYY')}</Text>
        {props.loading ? <Spinner color='black' /> : null}
        {/* <View style={styles.controlsChild}>
          <Button text='Month' style={styles.controlButton} onPress={() => setView('month')} />
          <Button text='Week' style={styles.controlButton} onPress={() => setView('week')} />
          <Button text='Day' style={styles.controlButton} onPress={() => setView('day ')} />
        </View> */}
      </View>
      <View style={branding.calendar.style}>
        {daysOfWeek.map((day, i) => (
          <View key={day + i} style={[styles.cell, styles.header, i % 7 == 0 ? styles.firstCell : null]}>
            <Text style={styles.headerText}>{day}</Text>
          </View>
        ))}
        {days.map((day, i) => (
          <View key={day + i} style={[styles.cell, i % 7 == 0 ? styles.firstCell : null, styles.cell, i % 2 == 0 ? styles.evenCell : null]}>
            <Text style={moment(day).month() == moment(date.val).month() ? null : styles.differentMonth}>{moment(day).date()}</Text>

            <FlashList
              keyExtractor={item => item.appointmentSrNo}
              data={events.filter(event =>
                moment(day)
                  .startOf('day')
                  .isSame(moment(props.getEventStartDate(event)).startOf('day'))
              )}
              estimatedItemSize={17}
              renderItem={renderEvent}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  month: {
    marginLeft: 15,
    marginRight: 15,
    fontWeight: 'bold',
  },

  header: {
    height: 40,
    minHeight: 0,
    textAlign: 'center',
    backgroundColor: '#36304a',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
  },
  cell: {
    width: 'calc(100% / 7)',
    minHeight: 120,
    maxHeight: 120,
    textAlign: 'right',
    padding: 5,
    backgroundColor: 'white',
  },
  firstCell: {},
  evenCell: {
    backgroundColor: 'whitesmoke',
  },
  controls: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  controlsChild: {
    flexDirection: 'row',
  },
  controlButtons: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  controlButton: {
    borderRadius: 0,
  },
  differentMonth: {
    color: 'rgb(200, 200, 200)',
  },
})
