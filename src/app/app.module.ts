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
  {path: 'List/:id', component: ListComponent},
  {path: 'Home', component: HomeComponent}
  // {path: '', redirectTo: 'List', pathMatch:'full'}

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
