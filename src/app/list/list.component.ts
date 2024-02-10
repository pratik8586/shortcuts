import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Label } from '../models/Label';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  list:String[] = ['item1', 'item2', 'item1', 'item2']

  itemId:String='';
  // label:Label[]
  Root: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute){
    this.itemId = this.route.snapshot.params['id'];
    console.log("current Id = >"+  this.itemId);


    // this.http.get('assets/shortcuts-json-data.json').flatMap(data => data).

    this.http.get('assets/shortcuts-json-data.json').subscribe((res: any) => {
      console.log('--result -- ::', res.length);

      for(let i=0; i<res.length; i++){

        if(res[i].id == this.itemId){
          console.log('selected item =>', res[i]);
           this.Root = res[i];
        }
      }
      });
  }
}
