import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infi',
  templateUrl: './infi.page.html',
  styleUrls: ['./infi.page.scss'],
})
export class InfiPage implements OnInit {
  data:any[] = Array(20);
  @ViewChild( IonInfiniteScroll ) inifiteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData (event){
    // console.log(event);
    setTimeout(() => {
      //  Detener la carga de datos
      if ( this.data.length > 50) {
        this.inifiteScroll.complete();
        this.inifiteScroll.disabled = true;
        return;
      }

      // Agregar elementos
      const array = Array(20);
      this.data.push( ...array);
      // event.target.complete();
      this.inifiteScroll.complete();
    }, 1500);
  }
}
