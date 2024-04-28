import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
//DEFINE ROUTES
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'List/:id', component: ListComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutmeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    ListComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
