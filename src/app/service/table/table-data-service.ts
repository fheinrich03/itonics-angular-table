import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, type Observable } from 'rxjs'
import type { StarshipsResponse, Starship } from '../../types/starship'
import type { StarshipRow } from '../../components/table/types'

const API_URL = 'https://swapi.dev/api/'

@Injectable({
    providedIn: 'root',
})
export class TableDataService {
    constructor(private http: HttpClient) {}

    getStarships(page = 1): Observable<StarshipRow[]> {
        return this.http.get<StarshipsResponse>(`${API_URL}starships?page=${page}`).pipe(
            map((data) =>
                data.results.map((starship) => ({
                    name: starship.name,
                    model: starship.model,
                    manufacturer: starship.manufacturer,
                    crew: starship.crew,
                    passengers: starship.passengers,
                    hyperdrive_rating: starship.hyperdrive_rating,
                })),
            ),
        )
    }
}
