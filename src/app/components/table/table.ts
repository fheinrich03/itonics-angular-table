import { Component, effect, input, output } from '@angular/core'
import { AgGridAngular } from 'ag-grid-angular'
import type { BodyScrollEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'
import type { StarshipRow } from './types'

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [AgGridAngular],
    templateUrl: './table.html',
    styleUrl: './table.css',
})
export class Table {
    /**
     * How close (in rows) the user must scroll to the end of the currently loaded data
     * before we emit `loadMore`.
     *
     * Smaller value = fetch later (closer to the bottom).
     */
    private static readonly LOAD_MORE_THRESHOLD_ROWS = 5

    private gridApi: GridApi<StarshipRow> | null = null
    private isLoadingMore = false
    private lastRowCount = 0

    rowData = input<StarshipRow[]>([])
    isLoading = input<boolean>(false)
    loadMore = output<void>()

    colDefs: ColDef<StarshipRow>[] = [
        { field: 'name', editable: true, resizable: true, flex: 2 },
        { field: 'model', editable: true, resizable: true, flex: 1 },
        { field: 'manufacturer', editable: true, resizable: true, flex: 1 },
        { field: 'crew', editable: true, resizable: true, flex: 1 },
        { field: 'passengers', editable: true, resizable: true, flex: 1 },
        { field: 'hyperdrive_rating', editable: true, resizable: true, flex: 1 },
    ]

    constructor() {
        // Reset the load-more lock when new rows arrive.
        effect(() => {
            const currentCount = this.rowData().length
            if (currentCount > this.lastRowCount) {
                this.isLoadingMore = false
                this.lastRowCount = currentCount
            }
        })
    }

    private triggerLoadMore() {
        if (!this.gridApi) return

        const lastDisplayedRow = this.gridApi.getLastDisplayedRowIndex()
        const totalRows = this.gridApi.getDisplayedRowCount()
        if (totalRows === 0) return

        const shouldLoadMore = lastDisplayedRow >= totalRows - 1 - Table.LOAD_MORE_THRESHOLD_ROWS

        if (shouldLoadMore) {
            this.isLoadingMore = true
            this.loadMore.emit()
        }
    }

    onGridReady(event: GridReadyEvent<StarshipRow>) {
        this.gridApi = event.api
    }

    onBodyScroll(event: BodyScrollEvent) {
        if (this.isLoadingMore) return
        if (event.top <= 0) return

        this.triggerLoadMore()
    }
}
