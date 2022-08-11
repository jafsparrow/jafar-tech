import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';
@Pipe({
  name: 'timesago',
})
export class TimesagoPipe implements PipeTransform {
  transform(time: any, ...args: unknown[]): string {
    console.log('time', time);
    return DateTime.fromISO(time).toRelative() as string;
    return 'hello';
  }
}
