import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidades } from '../../interfaces/localidades';

@Injectable({
  providedIn: 'root'
})

export class LocalidadesService {

  private apiUrl=`http://localhost:8080/api/localidades`;

  constructor(private http:HttpClient) { }
   
  getLocalidades():Observable<Localidades[]>{
    return this.http.get<Localidades[]>(this.apiUrl)}};
