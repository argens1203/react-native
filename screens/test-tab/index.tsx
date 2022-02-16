import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, FlatList } from 'react-native';
import * as Calendar from 'expo-calendar';
import { DateTime } from 'luxon';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Schedule } from '../../modules/calendar/schedule.ios';
import { CalendarEvent } from '../../modules/calendar/entities/calendar-event.entity';

import { Event } from './event';

export default function TestTabScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, setText] = useState('Unclicked');
  const [error, setError] = useState('No Error Yet');
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const requestPermission = async () => {
    try {
      const result = await Calendar.requestCalendarPermissionsAsync();
      setText(JSON.stringify(result));
    } catch (e){
      setError (e.message);
    }
  }

  const getCalendarEvents = async () => {
    try {
      const from = DateTime.now().minus({weeks: 1});
      const to = DateTime.now();
      const result = await new Schedule().getEvents(from, to);
      // setText(JSON.stringify(result));
      setEvents(result);
    } catch (e){
      setError (e.message);
    }
  }

  return (
    <View style={styles.container}>
        <FlatList
          style={{paddingTop: 30}}
          data={events}
          renderItem={({item}) => (<Event event={item}/>)}
          keyExtractor={(e: CalendarEvent) => e.id}
        />
      <Button onPress={requestPermission} title={'Request Permission'}/>
      <Button onPress={getCalendarEvents} title={'Get Calendars Event'}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>{text}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 20,
    color: 'red',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
