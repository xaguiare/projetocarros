import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Foto',
  templateUrl: './fotos.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotosComponent implements OnInit {

  //Inbound property
  
  @Input() imagem = "";
  

  constructor() { }

  ngOnInit(): void {
  }

  
}