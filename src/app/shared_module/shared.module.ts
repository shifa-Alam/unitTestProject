import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { InputStringComponent } from './input-string/input-string.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';

@NgModule({
  declarations: [
    InputStringComponent,
    InputNumberComponent,
    InputEmailComponent,
    InputTextAreaComponent,
    InputPasswordComponent,
    InputPhoneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    InputStringComponent,
    InputNumberComponent,
    InputEmailComponent,
    InputTextAreaComponent,
    InputPasswordComponent,
    InputPhoneComponent
  ]
})
export class SharedModule { }
