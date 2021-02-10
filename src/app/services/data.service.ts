import { Repositorios } from '../listagem-repositorios/repositorios.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private repositorios: Repositorios;
  constructor() { }

  getRepositorios(){
    return this.repositorios;
  }
}
