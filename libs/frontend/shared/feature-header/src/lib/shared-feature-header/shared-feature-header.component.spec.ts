import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedFeatureHeaderComponent } from './shared-feature-header.component';

describe('SharedFeatureHeaderComponent', () => {
  let component: SharedFeatureHeaderComponent;
  let fixture: ComponentFixture<SharedFeatureHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedFeatureHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedFeatureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
