import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: 'Harry Potter e a Pedra Filosofal',
        resumo: 'Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo.',
        autores: ['J. K. Rowling'],
    },
    {
        codigo: 2,
        codEditora: 2,
        titulo: 'The Witcher - O Último Desejo',
        resumo: 'Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e de sangue-frio treinado, desde a infância, para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mundo. Um mundo fantástico criado por Sapkowski com claras influências da mitologia eslava. Um mundo em que nem todos os que parecem monstros são maus nem todos os que parecem anjos são bons...',
        autores: ['Andrzej Sapkowski'],
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: 'A Caverna de Cristal - Trilogia de Merlin',
        resumo: 'A Caverna de Cristal é o primeiro volume da Trilogia de Merlin, que narra a história do mago mais famoso de todos os tempos. Neste livro, Merlin, o mago, é um menino que vive em uma pequena aldeia no País de Gales. Ele não conhece sua verdadeira origem e não sabe nada sobre seus poderes. Sua vida muda quando ele encontra um misterioso cristal que o leva a uma caverna encantada. Lá, Merlin descobre que tem poderes mágicos e que seu destino é se tornar o maior mago de todos os tempos.',
        autores: ['Mary Stewart'],
    }
];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.reduce((max, l) => (l.codigo > max ? l.codigo : max), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
