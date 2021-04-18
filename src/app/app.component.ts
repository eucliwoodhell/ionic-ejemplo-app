import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  lists: Observable<List[]>;

  constructor(
    private dataService: DataService
  ) {}
  
  ngOnInit() {
    this.lists = this.dataService.getMenuOpt();
  }

}
