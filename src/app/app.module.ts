import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BioComponent } from './models/bio/bio.component';
import { EducationComponent } from './models/education/education.component';
import { WorkComponent } from './models/work/work.component';
import { ProjectsComponent } from './models/projects/projects.component';
import { ArticlesComponent } from './models/articles/articles.component';
import { CompetitionsComponent } from './models/competitions/competitions.component';
import { TechnologiesComponent } from './models/technologies/technologies.component';
import { SoftSkillsComponent } from './models/soft-skills/soft-skills.component';
import { SocialComponent } from './models/social/social.component';
import { HobbyComponent } from './models/hobby/hobby.component';
import { InspirationComponent } from './models/inspiration/inspiration.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './models/welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    EducationComponent,
    WorkComponent,
    ProjectsComponent,
    ArticlesComponent,
    CompetitionsComponent,
    TechnologiesComponent,
    SoftSkillsComponent,
    SocialComponent,
    HobbyComponent,
    InspirationComponent,
    WelcomeComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
