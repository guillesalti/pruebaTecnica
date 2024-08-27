import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedores } from '../../interfaces/localidades';

@Injectable({
  providedIn: 'root'
})

export class VendedoresService {

  private vendedoresUrl=`http://localhost:8080/api/vendedores`;

  constructor( private http:HttpClient){}
  
  getVendedores():Observable<Vendedores[]>{
    return this.http.get<Vendedores[]>(this.vendedoresUrl)}

  postVendedor(vendedor: Vendedores): Observable<Vendedores[]> {
     return this.http.post<Vendedores[]>(this.vendedoresUrl, vendedor);
  }
  
  putVendedor(id: number, vendedor: Vendedores): Observable<Vendedores[]> {
    return this.http.put<Vendedores[]>(`${this.vendedoresUrl}/${id}`, vendedor);
  }

  deleteVendedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.vendedoresUrl}/${id}`);
  }

  subirdFoto(id: number, foto: File): Observable<void> {
    const formData = new FormData();
    formData.append('foto', foto);
    return this.http.post<void>(`${this.vendedoresUrl}/${id}/foto`, formData);
  }

  };
  
  
