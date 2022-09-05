import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 listaDeUsuarios = [{
  name: 'Rachelalb',
  password: '123456'
 }]


  constructor() { }

  findUser(name: string){
    return this.listaDeUsuarios.find((user) => user.name === name )
  }
}
