import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  rowData = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];

  colDefs: ColDef[] = [
    { field: 'make', resizable: true, flex: 1 },
    { field: 'model', resizable: true, flex: 1 },
    { field: 'price', resizable: true, flex: 1 },
    { field: 'electric', resizable: true, flex: 1 },
  ];
}
