import * as ExpoCalendar from 'expo-calendar';
import { DateTime } from 'luxon';

import { dateTimeFromStringOrDate } from '../../../utils/luxon.util';
import { anyMissing } from '../../../utils/util';

export class CalendarEvent {
    constructor(input: Partial<CalendarEvent> = {}){
        return Object.assign(this, input);
    }

    id!: string;

    startDate!: DateTime;

    endDate!: DateTime;

    title!: string;

    static fromExpoCalendarEvent (event: ExpoCalendar.Event){
        const {id, startDate: _startDate, endDate: _endDate, title} = event;

        const startDate = dateTimeFromStringOrDate(_startDate);
        const endDate = dateTimeFromStringOrDate(_endDate);
        if (anyMissing([id, startDate, endDate, title])){
            return null;
        }
        
        return new CalendarEvent({id, startDate, endDate, title});
    }
}