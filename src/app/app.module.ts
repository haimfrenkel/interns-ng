import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordComponent } from './components/password/password.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { IngComponent } from './components/ing/ing.component';
import { Questionnaier2Component } from './components/questionnaier2/questionnaier2.component';
import { FinishComponent } from './components/finish/finish.component';
import { RealPasswordComponent } from './components/real-password/real-password.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    RegisterComponent,
    PasswordComponent,
    WelcomeComponent,
    QuestionnaireComponent,
    IngComponent,
    Questionnaier2Component,
    FinishComponent,
    RealPasswordComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
