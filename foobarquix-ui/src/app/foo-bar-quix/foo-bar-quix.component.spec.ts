import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FooBarQuixService } from '../shared/services/foo-bar-quix.service';
import { FooBarQuixComponent } from './foo-bar-quix.component';

describe('FooBarQuixFormComponent', () => {
  let component: FooBarQuixComponent;
  let fixture: ComponentFixture<FooBarQuixComponent>;
  let serviceConverter: FooBarQuixService;

  beforeEach((done: any) => {
    TestBed.configureTestingModule({
      declarations: [FooBarQuixComponent],
      imports: [HttpClientTestingModule],
      providers: [FooBarQuixService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FooBarQuixComponent);
    component = fixture.componentInstance;
    serviceConverter = TestBed.inject(FooBarQuixService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    done();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should push in resultHistory when convertNumber and call service', () => {
    const spy = spyOn(serviceConverter, 'convertNumber').and.returnValue(
      of({ result: 'Foo' })
    );

    component.convertNumber(3);

    expect(spy).toHaveBeenCalled();
    expect(component.resultHistory[0]).toEqual('3 and the result is Foo');
  });
});
