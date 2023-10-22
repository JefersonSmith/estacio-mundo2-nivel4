import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable()
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Rocco' },
    { codEditora: 2, nome: 'WMF Martins Fontes' },
    { codEditora: 3, nome: 'Hunter Books' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(e => e.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}
