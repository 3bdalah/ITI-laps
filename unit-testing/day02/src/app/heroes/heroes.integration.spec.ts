import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroComponent } from '../hero/hero.component';
import { HeroService } from '../services/hero service/hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  //mocking
  //fake object from HeroService
  let component: HeroesComponent;
  let mockHeroService: jasmine.SpyObj<HeroService>;
  let fixture: ComponentFixture<HeroesComponent>;
  let herosArray: Hero[];

  beforeEach(() => {
    herosArray = [
      { id: 1, name: 'superMan', strength: 7 },
      { id: 2, name: 'batman', strength: 10 },
      { id: 3, name: 'wonder woman', strength: 6 },
    ];
    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);
    mockHeroService.getHeroes.and.returnValue(of(herosArray));
    TestBed.configureTestingModule({
        declarations:[HeroesComponent,HeroComponent],
        providers:[
            {provide:HeroService,useValue:mockHeroService}
        ]
    })
    fixture=TestBed.createComponent(HeroesComponent)
    component=fixture.componentInstance;
  });
   it('check if component is create successfully',()=>{
       expect(component).toBeTruthy()
   })
  it('expect heroes[] to be empty',()=>{
      expect(component.heroes.length).toBe(0)
  })
  it('test that heroes[] has values after calling ngOnInit ',()=>{
      component.ngOnInit();
      expect(component.heroes.length).withContext('test length').toBe(3)
      expect(component.heroes[0].name).withContext('test name').toBe(herosArray[0].name)
      expect(mockHeroService.getHeroes).withContext('test function call').toHaveBeenCalled()
      fixture.detectChanges()
      let liTags=fixture.nativeElement.querySelectorAll('li')
      expect(liTags.length).toBe(3)
      let heroChilds=fixture.debugElement.queryAll(By.directive(HeroComponent))
      expect(heroChilds.length).toBe(3)
      expect(heroChilds[0].componentInstance.hero.name).toBe('superMan')
  })
  it('expect to delete superMan hero successfully ',()=>{
      component.ngOnInit()

      component.delete(herosArray[0])
      expect(component.heroes.length).toBe(2)
      expect(mockHeroService.deleteHero).toHaveBeenCalled()
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(herosArray[0])
     

  })
});
