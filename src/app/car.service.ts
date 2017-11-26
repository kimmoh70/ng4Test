import {NgModule} from "@angular/core";
import {Injectable} from '@angular/core';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Car} from './models/car';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DataTableParams } from 'angular-4-data-table-bootstrap-4';
import { environment } from '../environments/environment';

function paramsToQueryString(params: DataTableParams) {
  let result = [];
  
  if (params.offset != null) {
    result.push(['page', params.offset]);
  }
  if (params.limit != null) {
    result.push(['limit', params.limit]);
  }
  if (params.sortBy != null) {
    result.push(['sort', params.sortBy]);
  }
  if (params.sortAsc != null) {
    result.push(['order', params.sortAsc ? 'ASC' : 'DESC']);
  }
  
  return result.map(param => param.join('=')).join('&');
}

@Injectable()
@NgModule()
export class CarService {
  private url: string = 'http://localhost:4567/api/cars';
  
  constructor(private http: HttpClient) { }
  
  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }
  
  public getCarsQuery(params: DataTableParams): Observable<Car[]> {
    if (environment.clientSideSorting) {
      return this.http.get(this.url + '?' + paramsToQueryString(params))
      .map(r => (<any[]>r).sort((a,b) => this.sorter(a, b, params) ))
      .map(r => r.slice(params.offset, params.offset + params.limit));
    } else {
      return this.http.get(this.url + '?' + paramsToQueryString(params)) as Observable<Car[]>
    }
  }
  
  private sorter(a,b,params): number {
    if(params.sortBy) {
      return params.sortAsc ? a[params.sortBy] - b[params.sortBy] : b[params.sortBy] - a[params.sortBy];
    }
    return 1;
  }
  
  private extractData( response: Response){
    let body = response;
    return body || [];
  }
  
  private sortData(response: {response: any[], params: any}): Car[] {
    if(response.params.sortBy) {
      return response.response
      .sort((a, b) => a.params[response.params.sortBy] - b.params[response.params.sortBy])
    }
    return response.response;
  }
  
  public add(car: Car): Subscription {
    return this.http.post(this.url, car,
      {
        headers: new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8')
      }
    )
    .subscribe();
  }
  
  public edit(car: Car) {
    return this.http.put(this.url + '/' + car.id, car,
    {
      headers: new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8')
    }
  )
  .subscribe();
}
}
