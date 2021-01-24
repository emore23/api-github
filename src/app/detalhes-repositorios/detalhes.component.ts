import { ContributorsService } from './../services/contributors.service';
import { Contributors } from './contributors.interface';
import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  lista: Contributors[]

  constructor(
    //private dataService:DataService,
    private contributorsService:ContributorsService
  ) { }

  ngOnInit(): void {
   // console.log(this.dataService.getRepositorios())
   this.contributorsService.getContributors()
    .subscribe((res : any) => {
    this.lista = res
    })
  }

}
