import { Contributors } from './../detalhes-repositorios/contributors.interface';
import { Repositorios } from './../listagem-repositorios/repositorios.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly  url = "https://api.github.com/repositories";
  private readonly urlContributors = new URLSearchParams("https://api.github.com/repos//contributors");

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<Repositorios[]>(this.url)
      .pipe(
        tap(console.log)
      );
  }

  getContributors(){
    return this.http.get<Contributors[]>(this.urlContributors + '' + "contributors")
      .pipe(
        tap(console.log)
      );
  }
}
