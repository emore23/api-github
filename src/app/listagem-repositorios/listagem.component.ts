import { DataService } from '../services/data.service';
import { ApiService } from '../services/api.service';
import { Repositorios } from '../repositorios.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  //leva para a interface do que está sendo visualizado
  lista: Repositorios[]

  constructor(
    private api: ApiService,
    private router: Router,
    private dataService: DataService
  ) { }

  //executa a lista do service 
  ngOnInit(): void {
    this.api.getData()
    .subscribe((res : any) => {
     console.log( this.lista = res);
    })
  }

  detalhes(repositorios:Repositorios){
    this.dataService.setRepositorios(repositorios);
    this.router.navigateByUrl('/detalhes')
  }

}
