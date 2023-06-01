import * as ExpoCalendar from 'expo-calendar';
import {DateTime} from 'luxon';
import { notEmpty } from '../../utils/util';
import { CalendarEvent } from './entities/calendar-event.entity';

import { Calendar } from './entities/calendar.entity';

interface ISchedule {
    getDefaultCalendar(): Promise<ExpoCalendar.Calendar>;
}

export class Schedule implements ISchedule {
    async getDefaultCalendar(): Promise<ExpoCalendar.Calendar> {
        return await ExpoCalendar.getDefaultCalendarAsync();
    }

    async getEvents (from: DateTime, to: DateTime): Promise<CalendarEvent[]>{
        const calendarIds = (await this.getCalendars()).map((cal) => cal.id);
        const expoEvents = await ExpoCalendar.getEventsAsync(calendarIds, from.toJSDate(), to.toJSDate());
        return expoEvents.map((expoEvent) => CalendarEvent.fromExpoCalendarEvent(expoEvent)).filter(notEmpty);
    }

    async getCalendars(): Promise<Calendar[]>{
        const expoCalendars = await ExpoCalendar.getCalendarsAsync(ExpoCalendar.EntityTypes.EVENT);
        return expoCalendars
            .map(expoCalendar => Calendar.fromExpoCalendar(expoCalendar))
            .filter(notEmpty);
    }
}

