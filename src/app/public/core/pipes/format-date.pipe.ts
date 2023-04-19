import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string): string {
    const datePipe = new DatePipe('en-US');

    // Convierte la cadena de fecha en un objeto Date
    const date = new Date(value);

    // Aplica el formato deseado utilizando la clase DatePipe
    const formattedDate = datePipe.transform(date, 'hh:mm a dd/MM/yy') || '';

    return formattedDate;
  }

}
