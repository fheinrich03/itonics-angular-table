import { Component, computed, effect, inject } from '@angular/core'
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental'
import { Table } from '../../components/table/table'
import { TableDataService } from '../../service/table/table-data-service'
import type { StarshipRow } from '../../components/table/types'

@Component({
    selector: 'app-starships-page',
    standalone: true,
    imports: [Table],
    templateUrl: './starships-page.html',
    styleUrl: './starships-page.css',
})
export class StarshipsPage {
    private static readonly INITIAL_PAGES_TO_LOAD = 2

    private tableDataService = inject(TableDataService)

    readonly query = injectInfiniteQuery(() => ({
        queryKey: ['starships'],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => this.tableDataService.getStarshipsPage(pageParam as number),
        getNextPageParam: (lastPage) => lastPage.nextPage,
    }))

    readonly rows = computed<StarshipRow[]>(
        () => this.query.data()?.pages.flatMap((p) => p.rows) ?? [],
    )

    // Convenience helpers for template readability
    hasMore() {
        return this.query.hasNextPage()
    }

    constructor() {
        // Load N pages initially (to avoid "no scrollbar" on short viewports).
        effect(() => {
            const pagesLoaded = this.query.data()?.pages.length ?? 0
            if (pagesLoaded >= StarshipsPage.INITIAL_PAGES_TO_LOAD) return
            if (!this.query.hasNextPage()) return
            if (this.query.isFetchingNextPage()) return

            void this.query.fetchNextPage()
        })
    }

    onLoadMore() {
        if (!this.query.hasNextPage()) return
        if (this.query.isFetchingNextPage()) return
        void this.query.fetchNextPage()
    }

    retryInitialLoad() {
        void this.query.refetch()
    }
}
