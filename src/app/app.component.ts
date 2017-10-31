import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Car } from './models/car';
import {CarService} from "./car.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AppComponent {
  title = 'Cx Database';
  cars: Car[];

  constructor(private carService: CarService) {
    this.getCars(carService.getCars());
  }

  private getCars(service: Observable<Car[]>) {
    service.subscribe(data => {
      this.cars = data;
    })
  }
}
