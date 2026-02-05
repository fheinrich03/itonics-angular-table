import { provideHttpClient } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { TableDataService } from './table-data-service'

describe('TableDataService', () => {
    let service: TableDataService
    let httpMock: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TableDataService, provideHttpClient(), provideHttpClientTesting()],
        })
        service = TestBed.inject(TableDataService)
        httpMock = TestBed.inject(HttpTestingController)
    })

    it('returns rows', async () => {
        const promise = service.getStarshipsPage(1)
        const req = httpMock.expectOne('https://swapi.dev/api/starships?page=1')
        req.flush({
            next: null,
            results: [
                {
                    name: 'X-wing',
                    model: 'T-65 X-wing',
                    manufacturer: 'Incom Corporation',
                    crew: '1',
                    passengers: '0',
                    hyperdrive_rating: '1.0',
                },
            ],
        })

        const result = await promise
        expect(result.rows).toEqual([
            {
                name: 'X-wing',
                model: 'T-65 X-wing',
                manufacturer: 'Incom Corporation',
                crew: '1',
                passengers: '0',
                hyperdrive_rating: '1.0',
            },
        ])

        httpMock.verify()
    })

    it('returns nextPage value if the next page exists', async () => {
        const promise = service.getStarshipsPage(1)
        const req = httpMock.expectOne('https://swapi.dev/api/starships?page=1')
        req.flush({
            next: 'https://swapi.dev/api/starships?page=2',
            results: [],
        })

        const result = await promise
        expect(result.nextPage).toBe(2)

        httpMock.verify()
    })

    it('returns nextPage null if the next page does not exist', async () => {
        const promise = service.getStarshipsPage(2)
        const req = httpMock.expectOne('https://swapi.dev/api/starships?page=2')
        req.flush({
            next: null,
            results: [],
        })

        const result = await promise
        expect(result.nextPage).toBeNull()

        httpMock.verify()
    })
})
