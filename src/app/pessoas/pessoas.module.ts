import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';



@NgModule({
  declarations: [PessoaListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PessoasModule { }
