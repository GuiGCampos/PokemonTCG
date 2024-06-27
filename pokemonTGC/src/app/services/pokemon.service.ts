import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const url: string = "https://api.pokemontcg.io/v2/cards";
@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    constructor(private http: HttpClient) {
    }

    public GetCards() {
        return this.http.get(url).subscribe((res: any) => {
            if (res) {
                console.log(res);           
            }
        });
    }
}

