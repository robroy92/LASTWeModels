import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactmethodPage } from './contactmethod';

@NgModule({
  declarations: [
    ContactmethodPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactmethodPage),
  ],
})
export class ContactmethodPageModule {}
