import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  numeroAleatorio : number[] = [];
  dados : boolean= false;

  constructor() {
   }

  ngOnInit(): void {
  }


  tirarDados(){
    this.numeroAleatorio = [];
    for(let i = 0; i<5; i++){
      let numero = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      this.numeroAleatorio.push(numero);
    }
    this.dados=true; 
    
    
    if(this.generala()){
      alert("Felicitaciones GANASTE! ")
    }
  }

  generala(){
    let auxiliar = this.numeroAleatorio[0];
    for(const n of this.numeroAleatorio){
      if(auxiliar !=n){
        return false;
      }

    }
    return true;
  }

}
