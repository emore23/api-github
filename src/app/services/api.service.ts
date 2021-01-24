import { Repositorios } from './../repositorios.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url = "https://api.github.com/repositories";

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<Repositorios[]>(this.url)
      .pipe(
        tap(console.log)
      );
  }
}
