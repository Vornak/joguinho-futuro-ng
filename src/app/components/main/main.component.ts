import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  mostraCard:boolean = false


  nome!:string
  idade!:number

  pessoa1 = ''
  pessoa2 = ''
  pessoa3 = ''

  lugar1 = ''
  lugar2 = ''
  lugar3 = ''

  dinheiro:string[] = ['rico', 'pobre', 'milhonario']
  filhos:string[] = ['0', '1', '2', '4', '5']
  casamento:string[] = []
  lugar:string[] = []


  cr!:any
  dr = ''
  fr = ''
  lr!:any

  public remove():any{
    this.mostraCard = true
    
    this.casamento = [this.pessoa1, this.pessoa2, this.pessoa3]
    this.lugar = [this.lugar1, this.lugar2, this.lugar3]

    for (let i = 0; i < this.idade; i++) {

      const index1 = i % this.casamento.length;
      let index2 = i % this.lugar.length;
      let index3 = i % this.dinheiro.length;
      let index4 = i % this.filhos.length;
      index2 = index2-1
      index3 = index3+1
      index4 = index3-1
      if(this.lugar[index2]===undefined || this.dinheiro[index3] === undefined || this.filhos[index4] === undefined){
        if(this.lugar[index2]===undefined){
          index2 = index2 + 1;
        }else if(this.dinheiro[index3] === undefined){
          index3 = index3 -1;
        }else{
          index4 = index3 + 1;
        }

      }
      
      if(i==this.idade-1){

        

        this.cr = this.casamento[index1]
        this.lr = this.lugar[index2]
        this.dr = this.dinheiro[index3]
        this.fr = this.filhos[index4]
      }     
    }
    
  }






}



  


