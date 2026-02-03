import { Component, inject, signal } from '@angular/core'
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

    readonly rows = signal<StarshipRow[]>([])
    readonly errorMessage = signal<string | null>(null)
    readonly isInitialLoading = signal(true)

    private readonly nextPage = signal(1)
    private readonly hasNext = signal(true)
    private readonly isFetching = signal(false)
    private initialPagesLoaded = 0

    constructor() {
        this.fetchNextPage({ isInitial: true })
    }

    onLoadMore() {
        this.fetchNextPage({ isInitial: false })
    }

    retryInitialLoad() {
        this.fetchNextPage({ isInitial: true, force: true })
    }

    // exposed for template (e.g. end-of-list state)
    hasMore() {
        return this.hasNext()
    }

    private fetchNextPage(options: { isInitial: boolean; force?: boolean }) {
        if (!options.force) {
            if (this.isFetching()) return
            if (!this.hasNext()) return
        }

        if (options.isInitial) this.isInitialLoading.set(true)
        this.isFetching.set(true)
        this.errorMessage.set(null)

        const page = this.nextPage()
        this.tableDataService.getStarshipsPage(page).subscribe({
            next: ({ rows, hasNext }) => {
                this.rows.update((prev) => [...prev, ...rows])
                this.hasNext.set(hasNext)
                this.nextPage.set(page + 1)
                this.isFetching.set(false)

                if (options.isInitial) {
                    this.initialPagesLoaded += 1
                    const shouldLoadAnotherInitialPage =
                        hasNext && this.initialPagesLoaded < StarshipsPage.INITIAL_PAGES_TO_LOAD

                    if (shouldLoadAnotherInitialPage) {
                        // Keep the initial loading state; fetch next page immediately.
                        this.fetchNextPage({ isInitial: true })
                        return
                    }

                    this.isInitialLoading.set(false)
                }
            },
            error: (err) => {
                // don't spam errors during scroll; keep it simple for now
                this.errorMessage.set('Failed to load starships. Please try again.')
                this.isFetching.set(false)
                if (options.isInitial) this.isInitialLoading.set(false)

                console.error(err)
            },
        })
    }
}
