import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NameComponentComponent } from './name-component/name-component.component';
import { SpringbootintroComponent } from './springboot/springbootintro/springbootintro.component';
import { MicroservicesintroComponent } from './microservices/microservicesintro/microservicesintro.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AwsdeveloperComponent } from './awsdeveloper/awsdeveloper.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AwssolarchComponent } from './awssolarch/awssolarch.component';
import { AwscloudpractComponent } from './awscloudpract/awscloudpract.component';
import { AwssysopsComponent } from './awssysops/awssysops.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    NameComponentComponent,
    SpringbootintroComponent,
    MicroservicesintroComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AwsdeveloperComponent,
    ContactusComponent,
    AwssolarchComponent,
    AwscloudpractComponent,
    AwssysopsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
