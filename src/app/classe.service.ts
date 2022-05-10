import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  
  readonly API_URL = 'http://localhost:8088/KidZoneA/Classecontroller';
  constructor(private httpClient:HttpClient) {}

  getAllClasses(){
    return this.httpClient.get(`${this.API_URL}/listClasses`)
}
addClasse(Classe:any) {
    return this.httpClient.post(`${this.API_URL}/addClasse`, Classe)
}  
editClasse(Classe: any) {
    return this.httpClient.put(`${this.API_URL}/updateClasse`, Classe)
} 
deleteClasse(id:any) {
    return this.httpClient.delete(`${this.API_URL}/deleteClasse/${id}`)
}
}
