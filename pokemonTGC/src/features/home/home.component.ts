import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PokemonService } from '../../app/services/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.GetAllCards();
  }

  // getAllPokemons() {
  //   this.pokemonService.GetCards().subscribe(response => {
  //     this.pokemons = response;
  //     console.log(this.pokemons);
  //   });
  // }
} 
