import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { CardButton } from '../card-button/card-button';



@NgModule({
  declarations: [
    Card,
    CardButton
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Card
  ]
})
export class CardsModule { }
