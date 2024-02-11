import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostBinding } from '@angular/core';
import { Root } from '../models/Root';
import { Router } from '@angular/router';
import { Label } from '../models/Label';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @HostBinding('class.pc') pcMode = false;

  jsonDataResult: any;
  Root: any = [];

//   shortcuts : String[] = ["Android Studio", "Visual Studio", "Photoshop","Atom","Sublime","Postman", "Tableu",
// "Adobe Dreamviewer", "Intellij", "Eclipse"]


selectedItem(item: Label){
  // console.log('--result -- ::', item);

  this.route.navigate(['/List', item.id]);
}

constructor(
  private http: HttpClient, private route: Router,
  private element: ElementRef,
  private breakpointObserver: BreakpointObserver  
) { 

  this.http.get('assets/shortcuts-json-data.json').subscribe((res) => {
    this.Root = res;
    console.log('--result -- ::', this.Root);
  })

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

}
}
