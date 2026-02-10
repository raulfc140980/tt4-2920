import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html'
})
export class PokemonCardComponent {
  @Input() pokemon: any;
}
