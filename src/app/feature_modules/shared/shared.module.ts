import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputStringComponent } from './input-string/input-string.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    InputStringComponent,
    InputTextAreaComponent,
    InputNumberComponent,
    InputEmailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    InputStringComponent,
    InputTextAreaComponent,
    InputNumberComponent,
    InputEmailComponent
  ]
})
export class SharedModule { }
