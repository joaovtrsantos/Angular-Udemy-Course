import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  plano = {
    infos: {
      tipo: 'Teste',
      preco: 1000,
    },
  };
}
