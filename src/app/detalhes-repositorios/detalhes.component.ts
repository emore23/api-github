import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    console.log(this.dataService.getRepositorios())
  }

}
