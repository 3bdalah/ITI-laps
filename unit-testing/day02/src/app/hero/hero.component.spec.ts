import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';

describe('Hero component', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
    });
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
  });

  it('test component created successfuly', () => {
    expect(component).toBeTruthy();
  });
  it('expect after initialize hero property ,tesmplate should bind values correctly', () => {
    component.hero = { id: 1, name: 'superMan', strength: 10 }; //mocking
    fixture.detectChanges()

    // 1
    let span = fixture.debugElement.query(By.css('.badge'));
    //2
    let div = fixture.nativeElement.querySelector('div');

    expect(span.nativeElement.textContent).toBe('1');
    expect(div.textContent).toContain('superMan')
  });
});
