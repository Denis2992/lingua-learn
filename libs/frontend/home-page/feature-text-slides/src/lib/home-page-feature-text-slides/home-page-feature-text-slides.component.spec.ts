import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageFeatureTextSlidesComponent } from './home-page-feature-text-slides.component';

describe('HomePageFeatureTextSlidesComponent', () => {
  let component: HomePageFeatureTextSlidesComponent;
  let fixture: ComponentFixture<HomePageFeatureTextSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageFeatureTextSlidesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageFeatureTextSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
