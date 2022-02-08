import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import * as Calendar from 'expo-calendar';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function TestTabScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, setText] = useState('Unclicked');
  const [error, setError] = useState('No Error Yet');

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
      const result = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      setText(JSON.stringify(result[0]));
    } catch (e){
      setError (e.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Button onPress={requestPermission} title={'Request Permission'}/>
      <Button onPress={getCalendarEvents} title={'Get Calendars Event'}/>
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
