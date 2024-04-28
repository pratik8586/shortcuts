import { Component, HostBinding, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Label } from '../models/Label';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @HostBinding('class.pc') pcMode = false;  

  itemId:String='';
  Root: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver){
    this.itemId = this.route.snapshot.params['id'];
    console.log("current Id = >"+  this.itemId);

    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result : any) => {
  
        for(let breakpoint of Object.keys(result.breakpoints)){
          if(result.breakpoints[breakpoint]){
            if(breakpoint === Breakpoints.HandsetPortrait){
              this.pcMode=false;
            }
  
            if(breakpoint === Breakpoints.WebLandscape){
              this.pcMode =true;
            }
          }
        }
      },
    });
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
