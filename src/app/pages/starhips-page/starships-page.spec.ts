import '../../config/ag-grid.config'

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental'
import { TableDataService } from '../../service/table/table-data-service'
import { StarshipsPage } from './starships-page'

describe('StarshipsPage', () => {
    let component: StarshipsPage
    let fixture: ComponentFixture<StarshipsPage>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StarshipsPage],
            providers: [
                provideTanStackQuery(new QueryClient()),
                {
                    provide: TableDataService,
                    useValue: {
                        getStarshipsPage: vi.fn().mockResolvedValue({ rows: [], nextPage: undefined }),
                    } satisfies Partial<TableDataService>,
                },
            ],
        }).compileComponents()

        fixture = TestBed.createComponent(StarshipsPage)
        component = fixture.componentInstance
        await fixture.whenStable()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
