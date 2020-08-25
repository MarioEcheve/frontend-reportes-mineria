import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenedoresRoutingModule } from './mantenedores-routing.module';
import { CargoComponent } from './cargo/cargo.component';


@NgModule({
  declarations: [CargoComponent],
  imports: [
    CommonModule,
    MantenedoresRoutingModule
  ]
})
export class MantenedoresModule { }
