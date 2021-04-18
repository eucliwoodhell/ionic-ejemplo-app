import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

/* -------------------------------------------------------------------------- */
/* --------- Este modulo agrupara todos los componente personalizado -------- */
/* -------------------------------------------------------------------------- */

@NgModule({
  declarations: [HeaderComponent,FooterComponent, PopoverInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PopoverInfoComponent
  ]
})
export class ComponentsModule { }
