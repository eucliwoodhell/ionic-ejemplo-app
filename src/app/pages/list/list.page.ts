import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users : Observable<any>;

  @ViewChild('id_lista') ionList: IonList;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getUser().subscribe( console.log )
    this.users = this.dataService.getUser(); 
  }

  favorito( user:any ){
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  remove( user:any ){
    console.log(user);
    this.ionList.closeSlidingItems();
  }

}
