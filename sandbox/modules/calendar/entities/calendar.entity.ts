import * as ExpoCalendar from 'expo-calendar';

export class Calendar {
    constructor(input: Partial<Calendar> = {}){
        Object.assign(this, input);
    }

    id!: string;

    static fromExpoCalendar(calendar: ExpoCalendar.Calendar): Calendar | null{
        const {id} = calendar;
        if (!id){
            return null;
        }
        return new Calendar({id});
    }
}