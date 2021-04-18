import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(private loadingCtr: LoadingController) { }

  ngOnInit() {
  }

  showLoading(){
    this.presentLoading('Cargando');
    setTimeout( () => {
      this.loading.dismiss();
    },2000);
  }

  async presentLoading( message: string) {
    this.loading = await this.loadingCtr.create({
        // cssClass: 'my-custom-class',
      message: message,
      // message,
      // duration: 2000
    });
    await this.loading.present();
  }

}
