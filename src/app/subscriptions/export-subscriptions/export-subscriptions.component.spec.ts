import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSubscriptionsComponent } from './export-subscriptions.component';

describe('ExportSubscriptionsComponent', () => {
  let component: ExportSubscriptionsComponent;
  let fixture: ComponentFixture<ExportSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportSubscriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
