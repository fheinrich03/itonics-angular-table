import { Component, effect, input, output, signal } from '@angular/core'
import { AgGridAngular } from 'ag-grid-angular'
import {
    themeQuartz,
    type BodyScrollEvent,
    type ColDef,
    type GridApi,
    type GridReadyEvent,
} from 'ag-grid-community'
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
    theme = themeQuartz.withParams({
        // --- GRUNDGERÜST ---
        // Wir nutzen 'var(--card)' statt background, damit die Tabelle wie ein
        // Panel/Datapad aussieht, das auf dem Hintergrund liegt.
        backgroundColor: 'var(--card)', 
        foregroundColor: 'var(--card-foreground)',
        
        // --- HEADER (Tech Look) ---
        // '--muted' ist im Dark Mode das dunkle Grau/Blau -> Perfekt für Header
        headerBackgroundColor: 'var(--muted)',
        headerTextColor: 'var(--muted-foreground)',
        headerFontSize: '14px',
        headerFontWeight: '600', // Etwas dicker für den Terminal-Look
        
        // --- BORDERS ---
        // Subtile Linien, wie auf technischen Zeichnungen
        borderColor: 'var(--border)', 
        
        // --- AKZENTE (Jedi/Sith Vibes) ---
        // Das Jedi-Blau (oder Sith-Rot im Theme) für Checkboxen, Focus-Ringe etc.
        accentColor: 'var(--primary)',
        
        // --- ICONS ---
        // Hier nutzen wir direkt die Farbe des Textes oder eine spezielle Farbe
        iconColor: 'var(--foreground)', 
    
        // --- INTERAKTION ---
        // Wenn man über eine Zeile fährt: Ein ganz leichtes Aufleuchten
        rowHoverColor: 'var(--muted)', 
        
        // --- SPACING & FORM ---
        // Übernimmt den Radius deiner Buttons (Spartan UI Standard)
        borderRadius: 'var(--radius)', 
        // Etwas mehr Luft in den Zellen wirkt moderner
        spacing: 8, 
    });

    search = signal('')
    gridApi = signal<GridApi<StarshipRow> | null>(null)

    rowData = input<StarshipRow[] | null>(null)
    isLoading = input<boolean>(false)
    loadMore = output<void>()

    colDefs: ColDef<StarshipRow>[] = [
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

    private triggerLoadMore() {
        const api = this.gridApi()
        if (!api) return

        const lastDisplayedRow = api.getLastDisplayedRowIndex()
        const totalRows = api.getDisplayedRowCount()

        if (totalRows === 0) return
        const shouldLoadMore = lastDisplayedRow >= totalRows - 1

        if (shouldLoadMore) this.loadMore.emit()
    }

    onGridReady(event: GridReadyEvent<StarshipRow>) {
        this.gridApi.set(event.api)
    }

    onBodyScroll(event: BodyScrollEvent) {
        if (event.top <= 0) return

        this.triggerLoadMore()
    }
}
