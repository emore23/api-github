import { Contributors } from '../detalhes-repositorios/contributors.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {


/**
 *https://api.github.com/repos/---aqui usar full name ---
 * "https://api.github.com/repos/`${full_name}` + contributors"
 */
private readonly url = "https://api.github.com/repos/";

  constructor(
    private http: HttpClient
  ) { }

  getContributors() {
    return this.http.get<Contributors[]>(this.url)
    .pipe(
      tap(console.log)
    );
  }
}
