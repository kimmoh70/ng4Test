import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import {CarService} from '../car.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  static title = 'Cx Database';
  cars: Car[];
  itemCount: number;

  constructor(private carService: CarService) {
    //this.getCars(this.carService.getCarsQuery());
  }

  ngOnInit() {
  }

  private reloadItems(params) {
    this.getCars(this.carService.getCarsQuery(params));    
  }

  private getCars(service: Observable<Car[]>) {
    service.subscribe(data => {
      this.cars = data;
      this.itemCount = (data || []).length;
    });
  }
}
