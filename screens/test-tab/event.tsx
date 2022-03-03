import React from 'react';
import { Text, View } from '../../components/Themed';
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
            <Text>{startDate.toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</Text>
            <Text>{endDate.toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</Text>
            </View>
        </View>
    );
}
