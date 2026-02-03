import { Component, effect, input, output, signal } from '@angular/core'
import { AgGridAngular } from 'ag-grid-angular'
import type { BodyScrollEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'
import { HlmInputImports } from '@spartan-ng/helm/input'
import type { StarshipRow } from './types'
import { FormsModule } from '@angular/forms'
import { HlmLabelImports } from '@spartan-ng/helm/label'

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [AgGridAngular, FormsModule, HlmInputImports, HlmLabelImports],
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

    private isLoadingMore = false
    private lastRowCount = 0

    search = signal('')
    gridApi = signal<GridApi<StarshipRow> | null>(null)

    rowData = input<StarshipRow[] | null>(null)
    isLoading = input<boolean>(false)
    loadMore = output<void>()

    colDefs: ColDef<StarshipRow>[] = [
        { field: 'name', editable: true, resizable: true, flex: 2, filter: true },
        { field: 'model', editable: true, resizable: true, flex: 1, filter: true },
        { field: 'manufacturer', editable: true, resizable: true, flex: 1, filter: true },
        { field: 'crew', editable: true, resizable: true, flex: 1, filter: true },
        {
            field: 'passengers',
            editable: true,
            resizable: true,
            flex: 1,
            filter: 'agNumberColumnFilter',
        },
        {
            field: 'hyperdrive_rating',
            editable: true,
            resizable: true,
            flex: 1,
            filter: 'agNumberColumnFilter',
        },
    ]

    constructor() {
        // Reset the load-more lock when new rows arrive.
        effect(() => {
            const rows = this.rowData()
            if (!rows) return

            const currentCount = rows.length
            if (currentCount > this.lastRowCount) {
                this.isLoadingMore = false
                this.lastRowCount = currentCount
            }
        })

        effect(() => {
            const api = this.gridApi()
            const term = this.search()
            if (!api) return

            if (!term) {
                api.setGridOption('quickFilterText', undefined)
                return
            }

            api.setGridOption('quickFilterText', term)
        })
    }

    private triggerLoadMore() {
        const api = this.gridApi()
        if (!api) return

        const lastDisplayedRow = api.getLastDisplayedRowIndex()
        const totalRows = api.getDisplayedRowCount()
        if (totalRows === 0) return

        const shouldLoadMore = lastDisplayedRow >= totalRows - 1 - Table.LOAD_MORE_THRESHOLD_ROWS

        if (shouldLoadMore) {
            this.isLoadingMore = true
            this.loadMore.emit()
        }
    }

    onGridReady(event: GridReadyEvent<StarshipRow>) {
        this.gridApi.set(event.api)
    }

    onBodyScroll(event: BodyScrollEvent) {
        if (this.isLoadingMore) return
        if (event.top <= 0) return

        this.triggerLoadMore()
    }
}
