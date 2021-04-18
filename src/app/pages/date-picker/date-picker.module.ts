import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatePickerPageRoutingModule } from './date-picker-routing.module';

import { DatePickerPage } from './date-picker.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatePickerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatePickerPage],
  exports:[
    ComponentsModule
  ]
})
export class DatePickerPageModule {}
