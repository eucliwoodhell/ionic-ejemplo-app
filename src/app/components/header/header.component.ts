import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  favorite: boolean = false;

  @Input('text') titulo: string = '';
  @Input('like') like: string = '';

  constructor() {}

  ngOnInit() {}

  onClick(){
    this.favorite = !this.favorite;
  }

  buttonLike(like : string){
    return (like == 'si' ? false : true);
  }
}
