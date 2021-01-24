import { Repositorios } from './../repositorios.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private repositorios: Repositorios;
  constructor() { }

  setRepositorios(repositorios:Repositorios){
    this.repositorios = repositorios
  }
  getRepositorios(){
    return this.repositorios;
  }
}
