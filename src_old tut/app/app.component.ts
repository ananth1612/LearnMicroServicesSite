import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-app';
  Java = false;
  aws = false;
  javawithaws = false;
  devops = false;
  devopsinaws = false;
  usefullinks = false;

  javaMenu(){
    this.Java = true;
  this.aws = false;
  this.javawithaws = false;
  this.devops = false;
  this.devopsinaws = false;
  this.usefullinks = false;
  }
 
  awsMenu(){
    this.Java = false;
  this.aws = true;
  this.javawithaws = false;
  this.devops = false;
  this.devopsinaws = false;
  this.usefullinks = false;
  }

  javawithawsMenu(){
    this.Java = false;
  this.aws = false;
  this.javawithaws = true;
  this.devops = false;
  this.devopsinaws = false;
  this.usefullinks = false;
  }

  devopsMenu(){
    this.Java = false;
  this.aws = false;
  this.javawithaws = false;
  this.devops = true;
  this.devopsinaws = false;
  this.usefullinks = false;
  }


  devopsinawsMenu(){
    this.Java = false;
  this.aws = false;
  this.javawithaws = false;
  this.devops = false;
  this.devopsinaws = true;
  this.usefullinks = false;
  }

  usefullinksMenu(){
     this.Java = false;
  this.aws = false;
  this.javawithaws = false;
  this.devops = false;
  this.devopsinaws = false;
  this.usefullinks = true;
  }

  HomeMenu(){
     this.Java = false;
  this.aws = false;
  this.javawithaws = false;
  this.devops = false;
  this.devopsinaws = false;
  this.usefullinks = false;
  }
}
