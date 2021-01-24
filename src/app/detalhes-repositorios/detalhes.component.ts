import { Contributors } from './../contributors.interface';
import { ContributorsService } from './../services/contributors.service';
import { Router } from '@angular/router';
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
    private dataService:DataService,
    private router: Router,
    private contributorService:ContributorsService
  ) { }

  ngOnInit(): void {
    console.log(this.dataService.getRepositorios())
    this.contributorService.getContributors()
    .subscribe((res : any) => {
     console.log( this.lista = res);
    })
  }

  detalhesContributors(contributors:Contributors){
    //this.contributorService.setContributors(contributors);
    this.router.navigateByUrl('/contributors')
  }

}
