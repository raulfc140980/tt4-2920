import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html'
})
export class PokemonSearchComponent {

  pokemon: any = null;
  loading = false;
  error = '';
  searchValue = '';
  activeTab: 'search' | 'random' = 'search';

  constructor(private pokemonService: PokemonService) {}

  searchPokemon() {
    if (!this.searchValue) return;

    this.fetchPokemon(this.searchValue.toLowerCase());
  }

  getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    this.fetchPokemon(randomId);
  }

  private fetchPokemon(identifier: string | number) {
    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.pokemonService.getPokemon(identifier).subscribe({
      next: data => {
        this.pokemon = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Pokémon not found';
        this.loading = false;
      }
    });
  }
}
