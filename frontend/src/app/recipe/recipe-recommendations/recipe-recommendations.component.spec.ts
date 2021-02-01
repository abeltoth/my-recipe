import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRecommendationsComponent } from './recipe-recommendations.component';

describe('RecipeRecommendationsComponent', () => {
  let component: RecipeRecommendationsComponent;
  let fixture: ComponentFixture<RecipeRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeRecommendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
