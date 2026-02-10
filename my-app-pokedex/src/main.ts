import { bootstrapApplication } from '@angular/platform-browser';
import { PokemonSearch } from './app/components/pokemon-search/pokemon-search';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(PokemonSearch, {
  providers: [provideHttpClient()]
});
