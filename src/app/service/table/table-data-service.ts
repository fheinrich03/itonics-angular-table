import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import type { StarshipsResponse } from '../../types/starship'
import type { StarshipRow } from '../../types/starship-row'

const API_URL = 'https://swapi.dev/api/'

export type StarshipsPageResult = {
    rows: StarshipRow[]
    nextPage: number | null
}

@Injectable({
    providedIn: 'root',
})
export class TableDataService {
    constructor(private http: HttpClient) {}

    async getStarshipsPage(page: number): Promise<StarshipsPageResult> {
        const data = await firstValueFrom(
            this.http.get<StarshipsResponse>(`${API_URL}starships?page=${page}`),
        )

        return {
            rows: data.results.map((starship) => ({
                name: starship.name,
                model: starship.model,
                manufacturer: starship.manufacturer,
                crew: starship.crew,
                passengers: starship.passengers,
                hyperdrive_rating: starship.hyperdrive_rating,
            })),
            nextPage: data.next ? parseInt(data.next.split('page=')[1]) : null,
        }
    }
}
