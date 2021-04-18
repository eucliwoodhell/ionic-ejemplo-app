import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input('nombre') nombre: string;
  @Input('pais') pais: string;


  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  backNotArgument(){
    this.modalCtrl.dismiss()
  }

  backToArgument(){
    this.modalCtrl.dismiss({
      nombre: this.nombre,
      pais: this.pais
    })
  }
}
