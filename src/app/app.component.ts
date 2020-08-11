import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { User } from './Shared/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'SimpleAngularAPP';
  showMenu = false;
  darkModeActive: boolean;

userEmail = 'gilles.cedric@gmail.com';
currentUser  : User;
isAuthenticated: boolean;

 constructor ( public router:Router){}


 toggleMenu() {
  this.showMenu = !this.showMenu;
}
modeToggleSwitch() {

}

ngOnDestroy() {
  //this.sub1.unsubscribe();
}

logout() {
  this.toggleMenu();
  //this.router.navigateByUrl('/login');
  //this.fb.auth.signout();
}

}
