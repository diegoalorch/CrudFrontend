import { Injectable } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private personaUrl:string = 'http://localhost:2020/persona';
  constructor(private http: HttpClient) { }

  getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personaUrl+'/all');
  }

  getPersona(id:number):Observable<Object>{
    return this.http.get(`${this.personaUrl}/${id}`);
  }
  addPersona(persona:Persona):Observable<number>{
    return this.http.post<number>(this.personaUrl+"/add", persona, {headers:this.httpHeaders});
  }
  deletePersona(id:number): Observable<number>{
    return this.http.delete<number>(this.personaUrl+"/delete/"+id,{headers:this.httpHeaders});
  }
  updatePersona(persona:Persona): Observable<number>{
    return this.http.put<number>(`${this.personaUrl}/edit/${persona.IDPERSONA}`, persona,{headers:this.httpHeaders});
  }
}
