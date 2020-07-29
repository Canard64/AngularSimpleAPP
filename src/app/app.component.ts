import { Component } from '@angular/core';
import { GithubService} from './service/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleAngularAPP';
 users : String[];

 constructor (private githubService:GithubService){}
  getUsers()
  {
    this.githubService.getData().subscribe((data)=>{
      console.log(data);
    })
  }

}
