import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  constructor() {}
  Java = true;
  aws = false;
  javawithaws = false;
  devops = false;
  devopsinaws = false;
  usefullinks = false;

  javaMenu() {
    this.Java = true;
    this.aws = false;
    this.javawithaws = false;
    this.devops = false;
    this.devopsinaws = false;
    this.usefullinks = false;
  }
  awsMenu() {
    this.Java = false;
    this.aws = true;
    this.javawithaws = false;
    this.devops = false;
    this.devopsinaws = false;
    this.usefullinks = false;
  }
  javawithawsMenu() {
    this.Java = false;
    this.aws = false;
    this.javawithaws = true;
    this.devops = false;
    this.devopsinaws = false;
    this.usefullinks = false;
  }
  devopsMenu() {
  this.Java = false;
    this.aws = false;
    this.javawithaws = false;
    this.devops = true;
    this.devopsinaws = false;
    this.usefullinks = false;
  }
  awsdevopsMenu() {
    this.Java = false;
    this.aws = false;
    this.javawithaws = false;
    this.devops = false;
    this.devopsinaws = true;
    this.usefullinks = false;
  }
  usefullinksMenu() {
  this.Java = false;
    this.aws = false;
    this.javawithaws = false;
    this.devops = false;
    this.devopsinaws = false;
    this.usefullinks = true;
  }

}
