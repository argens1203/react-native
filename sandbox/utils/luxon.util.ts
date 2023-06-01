import { DateTime } from 'luxon';

export function dateTimeFromStringOrDate(input: string | Date){
    if (typeof input === 'string'){
        // console.log('date rep string', input);
        return DateTime.fromISO(input);
    }
    return DateTime.fromJSDate(input);
}