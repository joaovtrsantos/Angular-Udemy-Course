import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { CardButton } from '../card-button/card-button';
import { CardButtonCancel } from '../card-button-cancel/card-button-cancel';



@NgModule({
  declarations: [
    Card,
    CardButton,
    CardButtonCancel
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Card
  ]
})
export class CardsModule { }
