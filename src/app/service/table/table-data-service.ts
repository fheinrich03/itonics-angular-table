import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, type Observable } from 'rxjs'
import type { PersonRow } from '../../components/table/types'
import type { PeopleResponse } from '../../types/people'

const API_URL = 'https://swapi.dev/api/'

@Injectable({
    providedIn: 'root',
})
export class TableDataService {
    constructor(private http: HttpClient) {}

    getPeople(page = 1): Observable<PersonRow[]> {
        return this.http.get<PeopleResponse>(`${API_URL}people?page=${page}`).pipe(
            map((data) =>
                data.results.map((person) => ({
                    name: person.name,
                    height: Number(person.height),
                    mass: Number(person.mass),
                    gender: person.gender as PersonRow['gender'],
                })),
            ),
        )
    }
}
