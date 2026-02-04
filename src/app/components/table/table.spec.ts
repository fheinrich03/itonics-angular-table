import { ComponentFixture, TestBed } from '@angular/core/testing'

import '../../config/ag-grid.config'

import { Table } from './table'

describe('Table', () => {
    let component: Table
    let fixture: ComponentFixture<Table>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Table],
        }).compileComponents()

        fixture = TestBed.createComponent(Table)
        component = fixture.componentInstance
        await fixture.whenStable()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('adds AG Grid quick filter from search signal', async () => {
        const setGridOption = vi.fn()
        component.gridApi.set({ setGridOption } as any)

        component.search.set('falcon')
        fixture.detectChanges()
        await fixture.whenStable()

        expect(setGridOption).toHaveBeenCalledWith('quickFilterText', 'falcon')
    })

    it('removes AG Grid quick filter for empty search', async () => {
        const setGridOption = vi.fn()
        component.gridApi.set({ setGridOption } as any)

        component.search.set('')
        fixture.detectChanges()
        await fixture.whenStable()

        expect(setGridOption).toHaveBeenCalledWith('quickFilterText', undefined)
    })
})
