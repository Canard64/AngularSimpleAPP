import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
 // {path: 'details/:city', component: DetailsComponent, canActivate: [AppGuard]},
 // {path: 'add', component: AddComponent,  true},
 //{path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
 // {path: 'signup', component: SignupComponent , canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
