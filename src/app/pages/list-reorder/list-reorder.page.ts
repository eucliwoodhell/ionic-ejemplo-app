import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes : string[] = ['Archer', 'Saber', 'Lancer', 'Cancer'];
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event:any ){
    console.log(event);
    
    const itemMover = this.personajes.splice( event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    console.log(this.personajes);
    event.detail.complete();

  }

  toggleReorder(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}
