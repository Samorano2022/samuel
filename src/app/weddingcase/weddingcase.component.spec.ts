import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingcaseComponent } from './weddingcase.component';

describe('WeddingcaseComponent', () => {
  let component: WeddingcaseComponent;
  let fixture: ComponentFixture<WeddingcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
