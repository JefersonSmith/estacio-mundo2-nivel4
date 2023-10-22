import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro'; // Importe a classe Livro (certifique-se do caminho correto)
import { Editora } from '../editora'; // Importe a classe Editora (certifique-se do caminho correto)
import { ControleEditoraService } from '../controle-editora.service'; // Importe o serviço ControleEditoraService
import { ControleLivrosService } from '../controle-livros.service'; // Importe o serviço ControleLivrosService
@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
