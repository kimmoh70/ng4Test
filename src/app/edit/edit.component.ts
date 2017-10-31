import {Component, Input} from "@angular/core";
import {Car} from "../models/car";
import {CarService} from "../car.service";

@Component({
  selector: 'editor',
  templateUrl: './edit.component.html'
})
export class EditComponent {
  @Input() car: Car;

  constructor(private carService: CarService) {}

  private update(year: string) {
    console.log("updated to " + year);
    this.carService.edit(this.car);
  }
}
