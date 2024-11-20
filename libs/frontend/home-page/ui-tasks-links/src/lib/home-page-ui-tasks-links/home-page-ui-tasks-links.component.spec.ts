import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageUiTasksLinksComponent } from './home-page-ui-tasks-links.component';

describe('HomePageUiTasksLinksComponent', () => {
  let component: HomePageUiTasksLinksComponent;
  let fixture: ComponentFixture<HomePageUiTasksLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageUiTasksLinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageUiTasksLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
