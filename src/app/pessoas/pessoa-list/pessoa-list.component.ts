import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html'
})
export class PessoaListComponent implements OnInit {

  constructor(private service: PessoaService) { }

  ngOnInit(): void {
    this.service.listAll().subscribe((pessoas) => console.log(pessoas));
  }

}
