import {MenuComponent} from '../menu/menu.component';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}
 @ViewChild(MenuComponent)
  private menuComponent: MenuComponent;
  javaHeaderMenu() {
    this.menuComponent.javaMenu();
  }
  awsHeaderMenu() {
    this.menuComponent.awsMenu();
  }
  javawithawsHeaderMenu() {this.menuComponent.javawithawsMenu(); }
  devopsHeaderMenu() {this.menuComponent.devopsMenu(); }
  awsdevopsHeaderMenu() {this.menuComponent.awsdevopsMenu(); }
  usefullinksHeaderMenu() {this.menuComponent.usefullinksMenu(); }

  
  ngOnInit() {
  }

}
