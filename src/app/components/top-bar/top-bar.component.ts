import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  items!: MenuItem[];
  display: boolean = false;
  uploadedFiles: any[] = [];
  userLogged: boolean = false;


  constructor(
    private router: Router

    ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Usuário',
        icon: 'pi pi-fw pi-users',

      },
      {
          label: 'Recarregar',
          icon: 'pi pi-fw pi-refresh',
          command: e => this.locationReload(e),
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off',
        command: e => this.logoff(e)
     }
    ]
  }

  showDialog() {
      this.display = true;
    }

  locationReload(e: any){
    location.reload();
  }

  // modalUser(e: any){
  //   this.userLogged = true;
  // }

  logoff(e: any){
    this.router.navigate(['login']);
  }

}
