import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoas/pessoa-list/pessoa-list.component';

const routes: Routes = [
  {
    path: 'pessoas',
    component: PessoaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
