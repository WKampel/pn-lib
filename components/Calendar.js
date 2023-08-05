import { FlashList } from '@shopify/flash-list'
import moment from 'moment'
import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
import Button from './Button'
import Icon from './Icon'
import Spinner from './Spinner'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const getDaysBetweenDates = (start, end) => {
  let arr = []
  let dt = new Date(start)
  for (; dt <= new Date(end); dt.setDate(dt.getDate() + 1)) arr.push(new Date(dt))
  return arr
}

export default props => {
  const date = useState(new Date())
  const view = useState('month')

  const events = [...props.events].sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

  const prev = () => {
    date.set(moment(date.val).subtract(1, view.val).toDate())
  }

  const next = () => {
    date.set(moment(date.val).add(1, view.val).toDate())
  }

  return (
    <View>
      <Controls date={date.val} loading={props.loading} prev={prev} next={next} setView={view.set} view={view.val} />
      {view.val === 'month' ? (
        <MonthView
          date={date.val}
          getEventStartDate={props.getEventStartDate}
          getEventId={props.getEventId}
          events={events}
          onChangeVisibleDates={props.onChangeVisibleDates}
          onEventPress={props.onEventPress}
          getEventName={props.getEventName}
          getEventDesc={props.getEventDesc}
        />
      ) : null}

      {view.val === 'week' ? (
        <WeekView
          date={date.val}
          getEventStartDate={props.getEventStartDate}
          getEventId={props.getEventId}
          events={events}
          onChangeVisibleDates={props.onChangeVisibleDates}
          onEventPress={props.onEventPress}
          getEventName={props.getEventName}
          getEventDesc={props.getEventDesc}
        />
      ) : null}

      {view.val === 'day' ? (
        <DayView
          date={date.val}
          getEventStartDate={props.getEventStartDate}
          getEventId={props.getEventId}
          events={events}
          onChangeVisibleDates={props.onChangeVisibleDates}
          onEventPress={props.onEventPress}
          getEventName={props.getEventName}
          getEventDesc={props.getEventDesc}
        />
      ) : null}
    </View>
  )
}

const MonthView = ({ date, getEventStartDate, getEventId, events, onChangeVisibleDates, onEventPress, getEventName, getEventDesc }) => {
  const momentDate = moment(date)
  const startDate = momentDate.clone().startOf('month').startOf('week').startOf('day')
  const endDate = startDate.clone().add(41, 'days').endOf('day')
  const month = momentDate.month()

  const days = getDaysBetweenDates(startDate, endDate)

  useEffect(() => {
    if (onChangeVisibleDates) onChangeVisibleDates(startDate, endDate)
  }, [date])

  const renderEvent = ({ item }) => {
    return (
      <Pressable onPress={onEventPress?.bind(null, item)}>
        <Event startDate={moment(getEventStartDate(item)).format('h:mmA')} name={getEventName(item)} desc={getEventDesc(item)} />
      </Pressable>
    )
  }

  return (
    <View style={styles.calendar}>
      {daysOfWeek.map((day, i) => (
        <View key={day} style={[styles.cell, styles.header]}>
          <Text style={styles.headerText}>{day}</Text>
        </View>
      ))}
      {days.map((day, i) => (
        <View key={day} style={[styles.cell, styles.cell, i % 2 === 0 ? styles.evenCell : null]}>
          <Text style={moment(day).month() === month ? null : styles.differentMonth}>{moment(day).date()}</Text>

          <FlashList
            keyExtractor={event => getEventId(event)}
            data={events.filter(event =>
              moment(day)
                .startOf('day')
                .isSame(moment(getEventStartDate(event)).startOf('day'))
            )}
            estimatedItemSize={17}
            renderItem={renderEvent}
          />
        </View>
      ))}
    </View>
  )
}

const WeekView = ({ date, getEventStartDate, getEventId, events, onChangeVisibleDates, onEventPress, getEventName, getEventDesc }) => {
  const momentDate = moment(date)
  const startDate = momentDate.clone().startOf('week').startOf('day')
  const endDate = startDate.clone().add(6, 'days').endOf('day')

  const days = getDaysBetweenDates(startDate, endDate)

  useEffect(() => {
    if (onChangeVisibleDates) onChangeVisibleDates(startDate, endDate)
  }, [date])

  const renderEvent = ({ item }) => {
    return (
      <Pressable onPress={onEventPress?.bind(null, item)}>
        <Event startDate={moment(getEventStartDate(item)).format('h:mmA')} name={getEventName(item)} desc={getEventDesc(item)} />
      </Pressable>
    )
  }

  return (
    <View style={styles.calendar}>
      {days.map((day, i) => (
        <View key={day} style={[styles.cell, styles.header]}>
          <Text style={styles.headerText}>{moment(day).format('ddd, MMM D')}</Text>
        </View>
      ))}

      {days.map((day, i) => (
        <View key={day} style={[styles.cell, styles.weekCell, i % 2 === 0 ? styles.evenCell : null]}>
          <FlashList
            keyExtractor={event => getEventId(event)}
            data={events.filter(event =>
              moment(day)
                .startOf('day')
                .isSame(moment(getEventStartDate(event)).startOf('day'))
            )}
            estimatedItemSize={17}
            renderItem={renderEvent}
          />
        </View>
      ))}
    </View>
  )
}

const DayView = ({ date, getEventStartDate, getEventId, events, onChangeVisibleDates, onEventPress, getEventName, getEventDesc }) => {
  useEffect(() => {
    if (onChangeVisibleDates) onChangeVisibleDates(moment(date).startOf('day'), moment(date).endOf('day'))
  }, [date])

  const renderEvent = ({ item }) => {
    return (
      <Pressable onPress={onEventPress?.bind(null, item)}>
        <Event startDate={moment(getEventStartDate(item)).format('h:mmA')} name={getEventName(item)} desc={getEventDesc(item)} />
      </Pressable>
    )
  }

  return (
    <View style={styles.calendar}>
      <View style={[styles.cell, styles.header, styles.dayHeader]}>
        <Text style={styles.headerText}>{moment(date).format('ddd, MMM D')}</Text>
      </View>

      <View style={[styles.cell, styles.dayCell]}>
        <FlashList
          keyExtractor={event => getEventId(event)}
          data={events.filter(event =>
            moment(date)
              .startOf('day')
              .isSame(moment(getEventStartDate(event)).startOf('day'))
          )}
          estimatedItemSize={17}
          renderItem={renderEvent}
        />
      </View>
    </View>
  )
}

const Controls = ({ date, loading, prev, next, setView, view }) => (
  <View style={styles.controls}>
    <View style={styles.controlsChild}>
      <Button icon={<Icon set='ionicons' name='chevron-back' size={20} />} style={styles.controlButton} onPress={prev} />
      <Button icon={<Icon set='ionicons' name='chevron-forward' size={20} />} style={styles.controlButton} onPress={next} />
    </View>
    <View style={[styles.controlsChild, styles.controlsMonth]}>
      <Text style={styles.controlsMonthText}>{moment(date).format('MMM YYYY')}</Text> {loading ? <Spinner color='black' /> : null}
    </View>
    <View style={styles.controlsChild}>
      <Button text='Month' style={[styles.controlButton, view === 'month' ? styles.activeViewButton : {}]} onPress={setView.bind(null, 'month')} />
      <Button text='Week' style={[styles.controlButton, view === 'week' ? styles.activeViewButton : {}]} onPress={setView.bind(null, 'week')} />
      <Button text='Day' style={[styles.controlButton, view === 'day' ? styles.activeViewButton : {}]} onPress={setView.bind(null, 'day')} />
    </View>
  </View>
)

const Event = ({ name, desc, startDate }) => {
  const { colors } = useBranding('calendar')
  return (
    <View style={[styles.event, { backgroundColor: colors.primary }]}>
      <Text style={[styles.eventText, styles.eventDate]}>{startDate}</Text>
      <Text style={styles.eventText}>{name}</Text>
      <Text style={styles.eventText}>{desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  evenCell: {
    backgroundColor: 'whitesmoke',
  },
  controls: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    minHeight: 30,
  },
  controlsMonth: {},
  controlsMonthText: {
    fontWeight: 'bold',
  },
  differentMonth: {
    color: 'rgb(200, 200, 200)',
  },
  activeViewButton: {
    backgroundColor: 'gray',
  },
  calendar: {
    color: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
  weekCell: {
    maxHeight: 'unset',
  },
  dayHeader: {
    width: '100%',
  },
  dayCell: {
    maxHeight: 'unset',
    width: '100%',
  },
  event: {
    borderRadius: 3,
    marginBottom: 2,
    flexDirection: 'row',
    padding: 5,
    gap: 5,
  },
  eventText: {
    fontSize: 10,
    color: 'white',
    textWrap: 'nowrap',
  },
  eventDate: {
    fontWeight: 'bold',
  },
})
