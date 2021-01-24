import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem-repositorios/listagem.component';
import { DetalhesComponent } from './detalhes-repositorios/detalhes.component';
import { HttpClientModule } from '@angular/common/http';
import { ContributorsComponent } from './contributors/contributors.component';
import { IssuesComponent } from './issues/issues.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    DetalhesComponent,
    ContributorsComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
