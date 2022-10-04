import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomeworkComponentComponent } from './homework-component/homework-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MathComponent } from './math/math.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TipsComponent } from './tips/tips.component';
import { CompleteComponent } from './complete/complete.component';
import { AddUpdateGradeComponent } from './add-update-grade/add-update-grade.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { UserGradesComponent } from './user-grades/user-grades.component';
import { ServiceCardComponent } from './service-card/service-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    SignInPageComponent,
    HomeworkComponentComponent,
    HomePageComponent,
    WelcomePageComponent,
    MathComponent,
    NavBarComponent,
    TipsComponent,
    CompleteComponent,
    AddUpdateGradeComponent,
    ReportCardComponent,
    UserGradesComponent,
    ServiceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
