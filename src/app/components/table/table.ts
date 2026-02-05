import { Component, computed, effect, input, output, signal } from '@angular/core'
import { AgGridAngular } from 'ag-grid-angular'
import {
    themeQuartz,
    type BodyScrollEvent,
    type ColDef,
    type GridApi,
    type GridReadyEvent,
} from 'ag-grid-community'
import { provideIcons } from '@ng-icons/core'
import { lucideFilter, lucideX } from '@ng-icons/lucide'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { HlmCardImports } from '@spartan-ng/helm/card'
import { HlmInputImports } from '@spartan-ng/helm/input'
import { HlmIconImports } from '@spartan-ng/helm/icon'
import type { StarshipRow } from '../../types/starship-row'
import { FormsModule } from '@angular/forms'
import { HlmLabelImports } from '@spartan-ng/helm/label'

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [
        AgGridAngular,
        FormsModule,
        HlmCardImports,
        HlmButtonImports,
        HlmIconImports,
        HlmInputImports,
        HlmLabelImports,
    ],
    providers: [...provideIcons({ lucideFilter, lucideX })],
    templateUrl: './table.html',
    styleUrl: './table.css',
})
export class Table {
    theme = themeQuartz.withParams({
        backgroundColor: 'var(--card)',
        foregroundColor: 'var(--card-foreground)',
        headerBackgroundColor: 'var(--muted)',
        headerTextColor: 'var(--muted-foreground)',
        headerFontSize: '14px',
        headerFontWeight: '600',
        borderColor: 'var(--border)',
        accentColor: 'var(--primary)',
        iconColor: 'var(--foreground)',
        rowHoverColor: 'var(--muted)',
        borderRadius: 'var(--radius)',
        spacing: 8,
    })

    search = signal('')
    gridApi = signal<GridApi<StarshipRow> | null>(null)
    private readonly hasColumnFilters = signal(false)
    readonly hasActiveFilters = computed(() => {
        const hasQuickFilter = this.search().trim().length > 0
        return hasQuickFilter || this.hasColumnFilters()
    })

    rowData = input<StarshipRow[] | null>(null)
    isLoading = input<boolean>(false)
    loadMore = output<void>()

    colDefs: ColDef<StarshipRow>[] = [
        {
            headerName: '#',
            valueGetter: (params) => (params.node?.rowIndex ?? 0) + 1,
            flex: 0,
            maxWidth: 64,
        },
        { field: 'name', editable: true, resizable: true, flex: 1, filter: true },
        { field: 'model', editable: true, resizable: true, flex: 1, filter: true },
        { field: 'manufacturer', editable: true, resizable: true, flex: 1, filter: true },
        { field: 'crew', editable: true, resizable: true, flex: 0.5, filter: true },
        {
            field: 'passengers',
            editable: true,
            resizable: true,
            flex: 0.5,
            filter: 'agNumberColumnFilter',
        },
        {
            field: 'hyperdrive_rating',
            editable: true,
            resizable: true,
            flex: 0.3,
            filter: 'agNumberColumnFilter',
        },
    ]

    constructor() {
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

    clearAllFilters() {
        const api = this.gridApi()
        this.search.set('')
        if (!api) return

        api.setFilterModel(null)
        api.onFilterChanged()
        this.hasColumnFilters.set(false)
    }

    onFilterChanged() {
        const api = this.gridApi()
        if (!api) return

        const model = api.getFilterModel()
        this.hasColumnFilters.set(model != null && Object.keys(model).length > 0)
    }

    private triggerLoadMore() {
        const api = this.gridApi()
        if (!api) return

        const renderedRows = api.getLastDisplayedRowIndex()
        const totalRows = api.getDisplayedRowCount()

        if (totalRows === 0) return
        const shouldLoadMore = renderedRows >= totalRows - 1

        if (shouldLoadMore) this.loadMore.emit()
    }

    onGridReady(event: GridReadyEvent<StarshipRow>) {
        this.gridApi.set(event.api)
        this.onFilterChanged()
    }

    onBodyScroll(event: BodyScrollEvent) {
        if (event.top <= 0) return

        this.triggerLoadMore()
    }
}
