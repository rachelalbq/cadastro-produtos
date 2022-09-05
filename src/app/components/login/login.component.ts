import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

formUser!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.formUser = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  authLogin(){
    const userName = this.formUser.get('name')?.value
    const userPass = this.formUser.get('password')?.value

    const response = this.authService.login(userName, userPass)

    if (response) {
      localStorage.setItem('isLoggedIn', "true");
      this.router.navigate(['/home']);
    }
  }

}
