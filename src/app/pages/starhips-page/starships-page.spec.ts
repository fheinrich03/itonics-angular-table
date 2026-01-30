import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsPage } from './starships-page';

describe('StarshipsPage', () => {
  let component: StarshipsPage;
  let fixture: ComponentFixture<StarshipsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
