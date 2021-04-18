import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiPageRoutingModule } from './infi-routing.module';

import { InfiPage } from './infi.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfiPage],
  exports:[
    ComponentsModule
  ]
})
export class InfiPageModule {}
