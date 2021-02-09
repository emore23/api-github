import { DetalhesComponent } from './detalhes-repositorios/detalhes.component';
import { ListagemComponent } from './listagem-repositorios/listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListagemComponent },
  { path: 'detalhes', component: DetalhesComponent },
  { path: 'lista/full_name/detalhes', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
