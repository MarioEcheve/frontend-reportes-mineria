import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cargo } from '../../model/cargo';
@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor( private http : HttpClient) { }

  getCargos():Observable<Cargo[]>{
    return this.http.get<Cargo[]>('http://localhost:8080/cargo');
  }
}
