import { Component } from '@angular/core';

@Component({
  selector: 'app-sexto-componente',
  standalone: true,
  imports: [],
  templateUrl: './sexto-componente.component.html',
  styleUrl: './sexto-componente.component.css'
})
export class SextoComponenteComponent {

  //variavel de imagem

  imagem: string = "dia-do-sol.jpg"
  texto: string = "dia"

  //função para alterar a imagem
  alterarImagem(){
    if(this.imagem === 'dia-do-sol.jpg'){
      this.imagem = 'noite.jpg';
    }else{
      this.imagem = 'dia-do-sol.jpg';
    }

    if(this.texto === 'dia'){
      this.texto = 'noite';
    }else{
      this.texto = 'dia';
    }
  
  }

  imagem1: string = "bola.png"
  texto1: string = "bola"

  //função para alterar a imagem
  alterarImagem2(){
    if(this.imagem1 === 'bola.png'){
      this.imagem1 = 'quadrado.jpg';
    }else{
      this.imagem1 = 'bola.png';
    }
    
    if(this.texto1 === 'bola'){
      this.texto1 = 'quadrado';
    }else{
      this.texto1 = 'bola';
    }
  
  }
}