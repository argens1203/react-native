import { DateTime } from 'luxon';
import React from 'react';
import { View, Text } from 'react-native';
import { CalendarEvent } from '../../modules/calendar/entities/calendar-event.entity';

type Props = {
    event: CalendarEvent;
}

export function Event (props: Props){
    const {event} = props;
    const {title, startDate, endDate} = event;

    return (
        <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'black', justifyContent: 'space-between'}}>
            <View style={{padding: 10}}><Text>{title}</Text></View>
            <View>
            <Text>{startDate.toLocaleString()}</Text>
            <Text>{endDate.toLocaleString()}</Text>
            </View>
        </View>
    );
}