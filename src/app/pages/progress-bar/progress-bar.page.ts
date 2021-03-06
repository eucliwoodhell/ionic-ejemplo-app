import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  porcentaje : number = 0;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event:any ){
    console.log(event.detail.value);
    this.porcentaje = event.detail.value / 100;
  }
}
