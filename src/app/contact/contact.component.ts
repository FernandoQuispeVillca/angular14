import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      Contactos
    </h2>
    <a routerLink="add">Nuevo Contacto</a>
    <br>
    <a routerLink="edit/1">Editar Contacto</a>
    <div>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
