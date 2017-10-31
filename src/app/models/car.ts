import {NgModule} from "@angular/core";
@NgModule()
export class Car {
  constructor(
    public id?: string,
    public year: string = "1980",
    public model: string = "CX",
    public make: string = "Citroen",
    public colour: string = "",
    variant: string = "",
    description: string = "",
    error: string = "",
    location: string = "",
    owners: string = "",
    other: string = "",
    vin:string = "",
    gearbox: string = "",
    rego: string = "",
    engine: string = "") {}
}
