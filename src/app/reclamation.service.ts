import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  readonly API_URL = 'http://localhost:8088/KidZoneA/Reclamationcontroller';
  constructor(private httpClient:HttpClient) {}

getAllReclamations(){
    return this.httpClient.get(`${this.API_URL}/listReclamations`)
}
addReclamation(Reclamation:any) {
    return this.httpClient.post(`${this.API_URL}/addReclamation`, Reclamation)
}  
editReclamation(Reclamation: any) {
    return this.httpClient.put(`${this.API_URL}/updateReclamation`, Reclamation)
} 
deleteReclamation(id:any) {
    return this.httpClient.delete(`${this.API_URL}/deleteReclamation/${id}`)
}
}
