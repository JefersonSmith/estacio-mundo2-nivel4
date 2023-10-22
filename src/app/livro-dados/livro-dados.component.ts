// livro-dados.component.ts

import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro'; // Importe a classe Livro (certifique-se do caminho correto)
import { Editora } from '../editora'; // Importe a classe Editora (certifique-se do caminho correto)
import { ControleEditoraService } from '../controle-editora.service'; // Importe o serviço ControleEditoraService
import { ControleLivrosService } from '../controle-livros.service'; // Importe o serviço ControleLivrosService
import { Router } from '@angular/router'; // Importe o Router

// livro-dados.component.ts

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, 0, '', '', []);
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService,
    router: Router
  ) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n').map((autor) => autor.trim()); // Corrigir o preenchimento dos autores
    console.log('this.livro',this.livro);
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}
