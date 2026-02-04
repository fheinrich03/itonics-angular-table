import { TestBed } from '@angular/core/testing'
import { App } from './app'

describe('App', () => {
    beforeAll(() => {
        // mock apis for third-party components that use it
        if (!(globalThis as any).IntersectionObserver) {
            ;(globalThis as any).IntersectionObserver = class {
                observe() {}
                unobserve() {}
                disconnect() {}
                takeRecords() {
                    return []
                }
            }
        }

        // mock canvas api for third-party components that use it
        Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
            configurable: true,
            value: vi.fn(() => ({})),
        })
    })

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })

    it('should render the header title', async () => {
        const fixture = TestBed.createComponent(App)
        await fixture.whenStable()
        const compiled = fixture.nativeElement as HTMLElement
        expect(compiled.textContent).toContain('Star Wars Directory')
    })
})
