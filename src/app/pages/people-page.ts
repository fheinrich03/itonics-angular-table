import { Component, inject } from '@angular/core'
import type { PersonRow } from '../components/table/types'
import { Table } from '../components/table/table'
import { TableDataService } from '../service/table/table-data-service'
import { AsyncPipe } from '@angular/common'

@Component({
    selector: 'app-people-page',
    standalone: true,
    imports: [Table, AsyncPipe],
    templateUrl: './people-page.html',
    styleUrl: './people-page.css',
})
export class PeoplePage {
  private tableDataService = inject(TableDataService);

    rowData$ = this.tableDataService.getPeople()

}
