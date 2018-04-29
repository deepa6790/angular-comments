import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home-service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  { path: 'post', component: HomeComponent }
];

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
