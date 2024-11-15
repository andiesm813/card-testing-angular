import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StocksType } from '../models/financial/stocks-type';
import { Financial } from '../static-data/financial';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  public getStocks(): Observable<StocksType[]> {
    return of(Financial['StocksType']);
  }
}
