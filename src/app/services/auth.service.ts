import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  login(name: string, password: string): boolean{
    const user = this.userService.findUser(name)
    if(!user){
      return false;
    }
    return user.password === password
  }
}
