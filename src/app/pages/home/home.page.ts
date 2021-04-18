import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { List } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

/* -------------------------------------------------------------------------- */
/* ---------------------- Crear interface de elementos ---------------------- */
/* -------------------------------------------------------------------------- */

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // lists: List[] = [];
  lists: Observable<List[]>;

  constructor(  private menuCtr: MenuController,
                private dataService: DataService) { }

  ngOnInit() {
    this.lists = this.dataService.getMenuOpt();
  }

  showMenu(){
    this.menuCtr.open("first");
  }

}
