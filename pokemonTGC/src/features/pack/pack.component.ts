import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../app/services/pokemon.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';

@Component({
  selector: 'app-pack',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.css'
})

export class PackComponent implements OnInit {
  public pokemons: any;
  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.GetAllPokemons();
  }

  public GetAllPokemons() {
    this.pokemonService.SendRequest().subscribe(response => {
      if (response) {
        this.pokemons = response;
        console.log(response);
      }
    });
  }
}
