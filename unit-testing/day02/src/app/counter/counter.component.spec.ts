import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('counter component: ', () => {
  let fixture: ComponentFixture<CounterComponent>, component: CounterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('expect component to be created', () => {
    expect(component).toBeDefined();
  });

  it('p tag has counter value 0', () => {
    fixture.detectChanges();
    let p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toBe('0');
  });
  it('p should display counter ++ after click increas button', () => {
    let increaseBtn = fixture.debugElement.query(By.css('#inc'));
    let desreaseBtn = fixture.debugElement.query(By.css('#dec'));

    increaseBtn.triggerEventHandler('click');
    fixture.detectChanges()
    //class
    expect(component.counter).toBe(1)
    let p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toBe('1');

  });
});
