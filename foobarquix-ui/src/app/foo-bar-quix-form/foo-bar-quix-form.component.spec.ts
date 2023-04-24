import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooBarQuixFormComponent } from './foo-bar-quix-form.component';

describe('FooBarQuixFormComponent', () => {
  let component: FooBarQuixFormComponent;
  let fixture: ComponentFixture<FooBarQuixFormComponent>;

  beforeEach((done: any) => {
    const configure = (testBed: TestBed) => {
      testBed.configureTestingModule({
        declarations: [FooBarQuixFormComponent],
        imports: [],
        providers: [],
      });
    };

    fixture = TestBed.createComponent(FooBarQuixFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    done();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit output 3 when submit number 3', () => {
    const spy = spyOn(component.submitNumberOutput, 'emit');
    component.formNumberConvert.get('convertNumber').patchValue(3);
    component.submitNumber();
    expect(spy).toHaveBeenCalledOnceWith(3);
  });
});
