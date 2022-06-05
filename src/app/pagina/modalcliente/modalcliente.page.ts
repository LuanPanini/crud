import { ClienteService } from './../../servico/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.page.html',
  styleUrls: ['./modalcliente.page.scss'],
})
export class ModalclientePage implements OnInit {
  name: any;
  email: any;
  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController,
    private service: ClienteService
  ) { }
  onClick() {
    const data = {
      name: this.name,
    };
    this.http.post('http://127.0.0.1/crudionic/api.php', JSON.stringify(data)).subscribe((response: any) => {
      console.log(response);
    });
   }
  ngOnInit() {
  }
  fecharModal(){
    this.modalCtrl.dismiss();
  }
enviando(form: NgForm){
  const cliente = form.value;
  this.service.create(cliente).subscribe(response =>{
    this.modalCtrl.dismiss(response);
  });
}
}
