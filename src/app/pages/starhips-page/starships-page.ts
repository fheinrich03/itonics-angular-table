import { Component, inject } from '@angular/core'
import { Table } from '../../components/table/table'
import { TableDataService } from '../../service/table/table-data-service'
import { AsyncPipe } from '@angular/common'

@Component({
    selector: 'app-starships-page',
    standalone: true,
    imports: [Table, AsyncPipe],
    templateUrl: './starships-page.html',
    styleUrl: './starships-page.css',
})
export class StarshipsPage {
    private tableDataService = inject(TableDataService)

    rowData$ = this.tableDataService.getStarships()
}
