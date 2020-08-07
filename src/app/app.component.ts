import { Component } from '@angular/core';
import {UiService} from './service/ui/ui.service';
import {Router} from '@angular/router';

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
loggedIn : boolean = true;
sub1;

 constructor (public ui : UiService, public router:Router){}


 toggleMenu() {
  this.showMenu = !this.showMenu;
}
modeToggleSwitch() {
  this.ui.darkModeState.next(!this.darkModeActive);
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
