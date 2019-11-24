import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwsComponent } from './aws/aws.component';
import { AwsdevopsComponent } from './awsdevops/awsdevops.component';
import { DevopsComponent } from './devops/devops.component';
import { HomeComponent } from './home/home.component';

import { JavawithawsComponent } from './javawithaws/javawithaws.component';
import { UsefullinksComponent } from './usefullinks/usefullinks.component';
import { AwsintroComponent } from './aws/awsintro/awsintro.component';
import { JavawithawsmenuIntroComponent } from './javawithaws/javawithawsmenu-intro/javawithawsmenu-intro.component';
import { DevopsintroComponent } from './devops/devopsintro/devopsintro.component';
import { AwsdevopsintroComponent } from './awsdevops/awsdevopsintro/awsdevopsintro.component';
import { AngularinterquestComponent } from './angularinterquest/angularinterquest.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'java', component: JavaComponent },
  // {
  //   path: 'java', loadChildren: './java/java.module#JavaModule',
  // },

  // {
  //   path: 'bootmicro', loadChildren: './sprinbootmicroservices/sprinbootmicroservices.module#SpringbootmicroservicesModule',
  // },
  { path: 'aws', component: AwsComponent },
  { path: 'AWSIntro', component: AwsintroComponent },
  { path: 'javawithaws', component: JavawithawsComponent },
  { path: 'JavaWithAWSIntro', component: JavawithawsmenuIntroComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'DevOpsIntro', component: DevopsintroComponent },
  { path: 'awsdevops', component: AwsdevopsComponent },
  { path: 'AWSDevOpsIntro', component: AwsdevopsintroComponent },
  { path: 'usefullinks', component: UsefullinksComponent },

  { path: 'AWSIntro', component: AwsintroComponent },
  { path: 'DevOpsIntro', component: DevopsintroComponent },
  { path: 'JavaWithAWSIntro', component: JavawithawsmenuIntroComponent },

  { path: 'AWSDevOpsIntro', component: AwsdevopsintroComponent },

  { path: 'angintqust', component: AngularinterquestComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
