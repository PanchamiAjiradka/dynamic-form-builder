import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {

    constructor() {}

    public static getFormattedDate(date: Date): string {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${year}-${month}-${day}`;
    }

    public static getFormattedTime(date: Date): string {
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return `${hours}:${minutes}`;
    }

    public static getFormattedDateTime(date: Date): string {
        return `${HelperService.getFormattedDate(date)} ${HelperService.getFormattedTime(date)}`;
    }

    public static getFormattedDateTimeForInput(date: Date): string {
        return `${HelperService.getFormattedDate(date)}T${HelperService.getFormattedTime(date)}`;
    }

    public static getFormattedDateTimeForInputWithSeconds(date: Date): string {
        return `${HelperService.getFormattedDate(date)}T${HelperService.getFormattedTime(date)}:00`;
    }
}
