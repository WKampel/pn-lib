import React, { useContext, useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
import Button from '../../button'
import { ScrollView } from 'react-native-gesture-handler'
import { Context as StyleContext } from '../../contexts/style'

export default props => {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState('month')
  const style = useContext(StyleContext)

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const startDate = moment.utc(date).startOf('month').startOf('week')
  const endDate = startDate.clone().add(41, 'days')

  const getDaysBetweenDates = (start, end) => {
    let arr = []
    let dt = new Date(start)
    for (; dt <= new Date(end); dt.setDate(dt.getDate() + 1)) arr.push(new Date(dt))
    return arr
  }

  useEffect(() => {
    if (props.onChangeVisibleDates) props.onChangeVisibleDates(startDate, endDate)
  }, [view, date])

  const days = getDaysBetweenDates(startDate, endDate)

  const prev = () => {
    if (view == 'month') {
      setDate(moment.utc(date).subtract(1, 'month').toDate())
    }
  }

  const next = () => {
    if (view == 'month') {
      setDate(moment.utc(date).add(1, 'month').toDate())
    }
  }
  return (
    <View>
      <View style={styles.controls}>
        <View style={styles.controlsChild}>
          <Button text='<' style={styles.controlButton} onPress={prev} />
          <Button text='>' style={styles.controlButton} onPress={next} />
        </View>
        <Text style={styles.controlsChild}>{moment.utc(date).format('MMM YYYY')}</Text>
        {/* <View style={styles.controlsChild}>
          <Button text='Month' style={styles.controlButton} onPress={() => setView('month')} />
          <Button text='Week' style={styles.controlButton} onPress={() => setView('week')} />
          <Button text='Day' style={styles.controlButton} onPress={() => setView('day ')} />
        </View> */}
      </View>
      <View style={styles.calendar}>
        {daysOfWeek.map((day, i) => (
          <View key={day + i} style={[styles.cell, styles.header, i % 7 == 0 ? styles.firstCol : null]}>
            <Text>{day}</Text>
          </View>
        ))}
        {days.map((day, i) => (
          <View key={day + i} style={[styles.cell, i % 7 == 0 ? styles.firstCol : null]}>
            <Text style={moment.utc(day).month() == moment.utc(date).month() ? null : styles.differentMonth}>{moment.utc(day).date()}</Text>

            <ScrollView>
              {props.events
                .filter(event =>
                  moment
                    .utc(day)
                    .startOf('day')
                    .isSame(moment.utc(props.getEventStartDate(event)).startOf('day'))
                )
                .map((event, i) => (
                  <Pressable key={i} onPress={() => props.onEventPress(event)}>
                    <Text style={[styles.event, { backgroundColor: style.primaryColor }]}>{props.getEventLabel(event)}</Text>
                  </Pressable>
                ))}
            </ScrollView>
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
  },
  header: {
    minHeight: 0,
    textAlign: 'center',
    borderTopWidth: 1,
  },
  cell: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 'calc(100% / 7)',
    minHeight: 120,
    maxHeight: 120,
    textAlign: 'right',
    padding: 5,
    borderColor: 'rgb(220, 220, 220)',
  },
  firstCol: {
    borderLeftWidth: 1,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  controlsChild: {
    flexDirection: 'row',
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
