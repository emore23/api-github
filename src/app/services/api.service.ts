import { Detalhes } from './../detalhes-repositorios/detalhes.interface';
import { Repositorios } from './../listagem-repositorios/repositorios.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://api.github.com/repositories";

  constructor(
    private http: HttpClient
  ) { }

  getDataRepositories() {

    return this.http.get<Repositorios[]>(this.url)

  }

  getFullName(fulLogin: String): Observable<Repositorios[]> {

    return this.http.get<Repositorios[]>(`https://api.github.com/repos/${fulLogin}/contributors`);
  }

  getContributors(fullName: String): Observable<Detalhes[]> {
    console.log(fullName);

    return this.http.get<Detalhes[]>(`https://api.github.com/repos/${fullName}/contributors`)
  }
}
