import { Component, computed, effect, inject, signal } from '@angular/core'
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental'
import { FormsModule } from '@angular/forms'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { HlmCardImports } from '@spartan-ng/helm/card'
import { Table } from '../../components/table/table'
import { TableDataService } from '../../service/table/table-data-service'
import type { StarshipRow } from '../../types/starship-row'

@Component({
    selector: 'app-starships-page',
    standalone: true,
    imports: [Table, FormsModule, HlmButtonImports, HlmCardImports],
    templateUrl: './starships-page.html',
    styleUrl: './starships-page.css',
})
export class StarshipsPage {
    private static readonly INITIAL_PAGES_TO_LOAD = 2

    private tableDataService = inject(TableDataService)

    allStarshipsLoaded = signal(false)

    readonly query = injectInfiniteQuery(() => ({
        queryKey: ['starships'],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => this.tableDataService.getStarshipsPage(pageParam),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        retry: 2,
        retryDelay: 400,
    }))

    readonly rows = computed<StarshipRow[] | null>(
        () => this.query.data()?.pages.flatMap((p) => p.rows) ?? null,
    )

    readonly rowLength = computed(() => this.rows()?.length ?? 0)
    readonly isInitialLoading = computed(() => {
        const pagesLoaded = this.query.data()?.pages.length ?? 0
        return this.query.isPending() && pagesLoaded < StarshipsPage.INITIAL_PAGES_TO_LOAD
    })

    constructor() {
        effect(() => {
            this.loadInitialPages()
        })
    }

    loadInitialPages() {
        const pagesLoaded = this.query.data()?.pages.length ?? 0
        if (pagesLoaded >= StarshipsPage.INITIAL_PAGES_TO_LOAD) return
        if (!this.query.hasNextPage()) return
        if (this.query.isFetchingNextPage()) return

        void this.query.fetchNextPage()
    }

    onLoadMore() {
        if (!this.query.hasNextPage()) {
            this.allStarshipsLoaded.set(true)
            return
        }
        if (this.query.isFetchingNextPage()) return
        void this.query.fetchNextPage()
    }

    retryInitialLoad() {
        void this.query.refetch()
    }
}
