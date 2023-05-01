import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
import Button from '../../components/button'
import { ScrollView } from 'react-native-gesture-handler'
import { Context as StyleContext } from '../../contexts/style'
import { FlashList } from '@shopify/flash-list'
import Spinner from '../spinner'

export default props => {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState('month')
  const style = useContext(StyleContext)

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const startDate = moment(date).startOf('month').startOf('week')
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
        <Text style={[styles.event, { backgroundColor: style.primaryColor }]}>{props.getEventLabel(item)}</Text>
      </Pressable>
    )
  }

  useEffect(() => {
    if (props.onChangeVisibleDates) props.onChangeVisibleDates(startDate, endDate)
  }, [view, date])

  const days = getDaysBetweenDates(startDate, endDate)

  const prev = () => {
    if (view == 'month') {
      setDate(moment(date).subtract(1, 'month').toDate())
    }
  }

  const next = () => {
    if (view == 'month') {
      setDate(moment(date).add(1, 'month').toDate())
    }
  }
  return (
    <View>
      <View style={styles.controls}>
        <View style={[styles.controlsChild, styles.controlButtons]}>
          <Button text='<' style={styles.controlButton} onPress={prev} />
          <Button text='>' style={styles.controlButton} onPress={next} />
        </View>
        <Text style={[styles.controlsChild, styles.month]}>{moment(date).format('MMM YYYY')}</Text>
        {props.loading ? <Spinner color='black' /> : null}
        {/* <View style={styles.controlsChild}>
          <Button text='Month' style={styles.controlButton} onPress={() => setView('month')} />
          <Button text='Week' style={styles.controlButton} onPress={() => setView('week')} />
          <Button text='Day' style={styles.controlButton} onPress={() => setView('day ')} />
        </View> */}
      </View>
      <View style={styles.calendar}>
        {daysOfWeek.map((day, i) => (
          <View key={day + i} style={[styles.cell, styles.header, i % 7 == 0 ? styles.firstCell : null]}>
            <Text style={styles.headerText}>{day}</Text>
          </View>
        ))}
        {days.map((day, i) => (
          <View key={day + i} style={[styles.cell, i % 7 == 0 ? styles.firstCell : null, styles.cell, i % 2 == 0 ? styles.evenCell : null]}>
            <Text style={moment(day).month() == moment(date).month() ? null : styles.differentMonth}>{moment(day).date()}</Text>

            <FlashList
              keyExtractor={item => item.appointmentSrNo}
              data={props.events.filter(event =>
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
  calendar: {
    color: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
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

  event: {
    color: 'white',
    marginBottom: 2,
    borderRadius: 3,
    padding: 2,
    fontSize: 10,
    textAlign: 'left',
  },
  differentMonth: {
    color: 'rgb(200, 200, 200)',
  },
})
