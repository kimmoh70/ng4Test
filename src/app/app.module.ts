import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {CarService} from "./car.service";
import {EditComponent} from "./edit/edit.component";
import {FormsModule} from "@angular/forms";
import {CreateComponent} from "./create/create.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    CreateComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
