import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.page.html',
  styleUrls: ['./date-picker.page.scss'],
})
export class DatePickerPage implements OnInit {

  fechaNacimiento : Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDate = {
    buttons: [{
      text: 'Hola',
      handler: ( event ) => {
        console.log('Clicked Save!')
        console.log(event)
      }
    }, {
      text: 'Mundo',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        // return false;
      }
    }]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( $event){
    console.log($event);
    console.log(new Date($event.detail.value));
  }

}
