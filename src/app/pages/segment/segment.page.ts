import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  list: Observable<any>;
  textSearch: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.list = this.dataService.getHeore();
  }

  segmentChanged( event ){
    this.textSearch = event.detail.value;
    console.log(this.textSearch);
  }
}
