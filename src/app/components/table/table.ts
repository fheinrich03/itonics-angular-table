import { Component, input, Input } from '@angular/core'
import { AgGridAngular } from 'ag-grid-angular'
import type { ColDef } from 'ag-grid-community'
import type { StarshipRow } from './types'

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [AgGridAngular],
    templateUrl: './table.html',
    styleUrl: './table.css',
})
export class Table {
    rowData = input<StarshipRow[]>([])

    colDefs: ColDef<StarshipRow>[] = [
        { field: 'name', resizable: true, flex: 2 },
        { field: 'model', resizable: true, flex: 1 },
        { field: 'manufacturer', resizable: true, flex: 1 },
        { field: 'crew', resizable: true, flex: 1 },
        { field: 'passengers', resizable: true, flex: 1 },
        { field: 'hyperdrive_rating', resizable: true, flex: 1 },
    ]
}
