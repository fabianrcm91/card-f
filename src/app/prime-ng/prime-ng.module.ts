import { NgModule } from '@angular/core';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {SlideMenuModule} from 'primeng/slidemenu';
import { RippleModule } from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  exports: [
    ToolbarModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SlideMenuModule,
    RippleModule,
    TableModule,
    CalendarModule,
    CheckboxModule,
    InputTextareaModule,
    ToastModule,
    InputNumberModule

  ]
})
export class PrimeNgModule { }

