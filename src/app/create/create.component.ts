import { Component, OnInit } from '@angular/core';
import {Car} from "../models/car";
import {CarService} from "../car.service";
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private carForm: FormGroup;

  constructor(private carService: CarService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.save(this.prepareSave());
  }

  private save(car: Car) {
    console.log('save car: ' +  car.year);
    this.carService.add(car);
  }

  private prepareSave(): Car {
    const formModel = this.carForm.value;
    const car: Car = new Car();
    car.year = formModel.year as string;
    car.colour = formModel.colour;
    return car;
  }

  createForm() {
    this.carForm = this.fb.group(
      {
        year: '',
        colour: ''
      }
    )
  }
}
