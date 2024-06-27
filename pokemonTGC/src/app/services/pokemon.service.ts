import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    private url: string = "https://api.pokemontcg.io/v2/cards";
    public pokemons: any;
    constructor(private http: HttpClient) {
    }

    public SendRequest() {
        return this.http.get(this.url);   
    }

    public GetAllCards() {
        this.SendRequest().subscribe(result => {
            this.pokemons = result;
            console.log(this.pokemons);
        });
    }
}

