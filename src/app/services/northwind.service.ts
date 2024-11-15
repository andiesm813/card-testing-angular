import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { CategoriesType } from '../models/northwind/categories-type';
import { Northwind } from '../static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getCategories(): Observable<CategoriesType[]> {
    return of(Northwind['CategoriesType']);
  }

  public getEmployees(): Observable<EmployeesType[]> {
    return of(Northwind['EmployeesType']);
  }
}
