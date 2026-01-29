import { Component, input, Input } from '@angular/core'
import { AgGridAngular } from 'ag-grid-angular'
import type { ColDef } from 'ag-grid-community'
import type { PersonRow } from './types'

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [AgGridAngular],
    templateUrl: './table.html',
    styleUrl: './table.css',
})
export class Table {
    rowData = input<PersonRow[]>([])

    colDefs: ColDef<PersonRow>[] = [
        { field: 'name', resizable: true, flex: 2 },
        { field: 'height', resizable: true, flex: 1 },
        { field: 'mass', resizable: true, flex: 1 },
        { field: 'gender', resizable: true, flex: 1 },
    ]
}
