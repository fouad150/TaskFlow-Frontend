import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/service/api.service";
import {Observable} from "rxjs";
import {Fish} from "../../../core/models/Fish";
import {Competition} from "../../../core/models/Competition";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
/*
  constructor(private apiService: ApiService) { }*/


  /*create(competition: Competition): Observable<Competition> {
    return this.apiService.post<Competition>('/api/competitions', competition);
  }*/


  private baseUrl = "http://localhost:8080/api/competitions";

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]>{
    return this.http.get<Competition[]>(`${this.baseUrl}`);
  }
  create(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(`${this.baseUrl}`, competition);
  }

  updateCompetition(competition: Competition): Observable<Competition> {
    return this.http.put<Competition>(`${this.baseUrl}/${competition.id}`, competition);
  }
  deleteCompetition(competitionId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${competitionId}`);
  }


}
