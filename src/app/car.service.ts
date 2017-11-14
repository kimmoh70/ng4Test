import {Injectable} from '@angular/core';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Car} from './models/car';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DataTableParams } from 'angular-4-data-table-bootstrap-4';

function paramsToQueryString(params: DataTableParams) {
  let result = [];

  if (params.offset != null) {
    result.push(['_start', params.offset]);
  }
  if (params.limit != null) {
    result.push(['_limit', params.limit]);
  }
  if (params.sortBy != null) {
    result.push(['_sort', params.sortBy]);
  }
  if (params.sortAsc != null) {
    result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
  }

  return result.map(param => param.join('=')).join('&');
}

@Injectable()
export class CarService {
  private url: string = 'http://localhost:4567/api/cars';

  constructor(private http: HttpClient) { }

  public getCars(): Observable<Car[]> {
    return this.http.get(this.url)
      .map(this.extractData);
      //.catch(error => console.log(error));
  }

  public getCarsQuery(params: DataTableParams): Observable<Car[]> {
    return this.http.get(this.url + '?' + paramsToQueryString(params))
      .map(this.extractData);
    //.catch(error => console.log(error));
  }

  private extractData( response: Response){
    let body = response;
    return body || [];
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
