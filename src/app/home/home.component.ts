import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import {CarService} from "../car.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Cx Database';
  cars: Car[];
  
  constructor(private carService: CarService) {
    this.getCars(carService.getCars());
  }

  ngOnInit() {
  }

  private getCars(service: Observable<Car[]>) {
    service.subscribe(data => {
      this.cars = data;
    })
  }
}
