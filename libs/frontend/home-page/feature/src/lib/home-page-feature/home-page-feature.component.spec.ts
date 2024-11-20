import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageFeatureComponent } from './home-page-feature.component';

describe('HomePageFeatureComponent', () => {
  let component: HomePageFeatureComponent;
  let fixture: ComponentFixture<HomePageFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
