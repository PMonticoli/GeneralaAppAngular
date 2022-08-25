import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css'],
})
export class DadoComponent implements OnInit {
  @Input() numero: number = -1;
  url?: string = '';
  constructor() {}

  ngOnInit(): void {
    switch (this.numero) {
      case 1:
        this.url =
          'https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/dice-one-256.png';
        break;
      case 2:
        this.url =
          'https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/512/dice-two-256.png';
        break;
      case 3:
        this.url =
          'https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/512/dice-three-512.png';
        break;
      case 4:
        this.url =
          'https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/512/dice-four-512.png';
        break;
      case 5:
        this.url =
          'https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/512/dice-five-512.png';
        break;
      case 6:
        this.url =
          'https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/512/dice-six-512.png';
        break;
    }
  }
}
