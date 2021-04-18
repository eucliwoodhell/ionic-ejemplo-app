import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  // albums : any = [];
  albums: Observable<any>;
  textSearch: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    // this.dataService.getAlbums().subscribe( (albums : any) => {
    //   this.albums = albums;
    // });
    this.albums = this.dataService.getAlbums();
  }

  onSeachChange( event : any){
    console.log(event);
    this.textSearch = event.detail.value;
  }
}
