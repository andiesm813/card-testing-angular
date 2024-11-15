import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CardContentType } from '../models/card-content/card-content-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CardContentService {
  constructor(
    private http: HttpClient
  ) { }

  public getCardContentList(): Observable<CardContentType[]> {
    return this.http.get<CardContentType[]>("https://excel2json.io/api/share/9c8d3068-39be-46a7-fddb-08dcdd7faa98")
      .pipe(catchError(ErrorHandlerService.handleError<CardContentType[]>('getCardContentList', [])));
  }
}
