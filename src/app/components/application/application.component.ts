import { Component, OnInit, Input } from '@angular/core';
import { ApplicationData } from 'src/app/Shared/ApplicationData';
 import { GithubService} from '../../service/github.service';

 export interface PeriodicElement {
  name: string;
  id: number;
  url:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', id:1, url:'tto'},
  { name: 'Helium', id:2, url:'tto'},
  { name: 'Lithium', id:3, url:'tto'},
  { name: 'Beryllium', id:4, url:'tto'},
  { name: 'Boron', id:5, url:'tto'},
  { name: 'Carbon', id:6, url:'tto'},
  { name: 'Nitrogen', id:7, url:'tto'},
  { name: 'Oxygen', id:8, url:'tto'},
  { name: 'Fluorine', id:9, url:'tto'},
  { name: 'Neon', id:10, url:'tto'}
];

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {

  displayedColumns: string[] = [  'id','name','createdDate','lasttag', 'tags'];
  dataSource = [];

  constructor(private githubService:GithubService)
  {
    this.dataSource = [];
    this.loadData();
  }

  ngOnInit() {

  }

  loadData()
  {
    let Datas : Array <ApplicationData>[] = [];

    this.githubService.getUserRepos("Canard64").subscribe((data)=>{
      data.forEach(element => {
        element.dateDebut = element.created_at;

        this.githubService.getTags('Canard64',element.name.toString()).subscribe((data)=>{
            element.tags = data;
            if (data.length > 0)
            element.lasttag = data[0].name;
        });
        Datas.push(element);
      });
      this.dataSource = Datas;
    console.log(this.dataSource);
    });
  }
}
