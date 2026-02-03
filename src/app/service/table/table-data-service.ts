import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, of, shareReplay, type Observable } from 'rxjs'
import type { StarshipsResponse } from '../../types/starship'
import type { StarshipRow } from '../../components/table/types'

const API_URL = 'https://swapi.dev/api/'

export type StarshipsPageResult = {
    page: number
    rows: StarshipRow[]
    hasNext: boolean
}

@Injectable({
    providedIn: 'root',
})
export class TableDataService {
    private readonly starshipsPageCache = new Map<number, Observable<StarshipsPageResult>>()

    constructor(private http: HttpClient) {}

    getStarshipsPage(page = 1): Observable<StarshipsPageResult> {
        const cached = this.starshipsPageCache.get(page)
        if (cached) return cached

        const request$ = this.http.get<StarshipsResponse>(`${API_URL}starships?page=${page}`).pipe(
            map((data) => ({
                page,
                hasNext: data.next !== null,
                rows: data.results.map((starship) => ({
                    name: starship.name,
                    model: starship.model,
                    manufacturer: starship.manufacturer,
                    crew: starship.crew,
                    passengers: starship.passengers,
                    hyperdrive_rating: starship.hyperdrive_rating,
                })),
            })),
            // cache per page; subsequent subscriptions must not refetch
            shareReplay({ bufferSize: 1, refCount: false }),
        )

        this.starshipsPageCache.set(page, request$)
        return request$
    }
}
