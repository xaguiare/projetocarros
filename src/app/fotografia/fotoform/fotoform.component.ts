import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicos/database.service';

@Component({
  selector: 'app-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit {
  dataBase: any;

/*   httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }  */
  
  constructor(
      private databse: DatabaseService
    ) { }

  ngOnInit(): void {
  }

  submit(valor:any){
    console.log(valor.value);
    this.dataBase.postFoto(valor)
    /* this.http.post('http://localhost:3000/fotos/', JSON.stringify(valor.value), this.httpOptions).subscribe(); */
  }
}