import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient){ }
  getData():Observable<any>
  {
    const url = "https://api.github.com/users/Canard64/repos"
    return this.http.get<any>(url)
  }

  getUserRepos( user :String)
  {
    const url = "https://api.github.com/users/Canard64/repos"
    return this.http.get<any>(url)

  }
  getTags( user :String, repos: String)
  {
    const url = "https://api.github.com/users/Canard64/repos"
    return this.http.get<any>(url)

  }
}
