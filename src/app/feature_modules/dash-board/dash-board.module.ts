import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { SharedModule } from '../../shared_module/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    SharedModule
  ]
})
export class DashBoardModule { }
