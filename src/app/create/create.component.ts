import { Component, OnInit } from '@angular/core';
import {Car} from "../models/car";
import {CarService} from "../car.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private car: Car;
  constructor(private carService: CarService) {
    this.car = new Car();
  }

  ngOnInit() {
  }

  public save() {
    console.log('save car: ' +  this.car.year);
    this.carService.add(this.car);
  }

}
