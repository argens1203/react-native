import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import RNCalendarEvents from "react-native-calendar-events";

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function TestTabScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, setText] = useState('Unclicked');

  const checkPermission = async () => {
    const result = await RNCalendarEvents.checkPermissions(false);
    setText(JSON.stringify(result));
  }

  const requestPermission = async () => {
    const result = await RNCalendarEvents.requestPermissions(false);
    setText(JSON.stringify(result));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
      <Button onPress={checkPermission} title={'Check Permission'}/>
      <Button onPress={requestPermission} title={'Request Permission'}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
