import { Detalhes } from '../detalhes-repositorios/detalhes.interface';
import { ApiService } from '../services/api.service';
import { Repositorios } from './repositorios.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  //leva para a interface do que está sendo visualizado
  lista: Repositorios[]
  public form: FormGroup = this.fb.group({
    search: ['']
  })

  constructor(
    private api: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  //executa a lista do service
  public ngOnInit(): void {
    this.api.getDataRepositories()
      .subscribe((res: any) => {
       console.log('Lista de todos repos', this.lista = res)
      })
  }

  public detalhes(repositorio: Repositorios): void  {
    this.router.navigateByUrl('/detalhes', { state: { repositorio: repositorio } });
  }

  public onSubmit(event): void {
    event.preventDefault()
    this.api.getFullName(this.form.value.search).subscribe((res: any) => {
      console.log('Lista de Contributors', this.lista = [res])
    })
  }

}
