import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {Car} from "../models/car";
import {CarService} from "../car.service";
import { CreateComponent } from './create.component';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
//  let carService: CarService;
//  let httpClient: HttpClient;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [
        ReactiveFormsModule, 
        CarService,
        HttpClientModule,
        HttpClientTestingModule]
    })
    .compileComponents();
//    carService = new CarService(new HttpClient());
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
