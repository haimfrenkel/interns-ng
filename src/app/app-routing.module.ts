import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordComponent } from './components/password/password.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { Questionnaier2Component } from './components/questionnaier2/questionnaier2.component';
import { FinishComponent } from './components/finish/finish.component';
import { LoginComponent } from './components/login/login.component';
import { RealPasswordComponent } from './components/real-password/real-password.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path: "", component: OnboardingComponent},
  {path: "register", component: RegisterComponent },
  {path: "password" , component: PasswordComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "questionnaire", component: QuestionnaireComponent},
  {path: "questionnaier2" , component: Questionnaier2Component},
  {path: "finish" , component: FinishComponent},
  {path: "login" , component: LoginComponent},
  {path: "realPassword", component: RealPasswordComponent},
  {path: "start" , component: StartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
