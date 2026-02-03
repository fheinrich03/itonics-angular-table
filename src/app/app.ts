import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Header } from './components/header/header'
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, NgxStarrySkyComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected readonly title = signal('itonics-angular-table')
}
