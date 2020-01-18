import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { SpringbootintroComponent } from './springboot/springbootintro/springbootintro.component';
import { MicroservicesintroComponent } from './microservices/microservicesintro/microservicesintro.component';
import { HomeComponent } from './home/home.component';
import { AwsdeveloperComponent } from './awsdeveloper/awsdeveloper.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AwssolarchComponent } from './awssolarch/awssolarch.component';
import { AwssysopsComponent } from './awssysops/awssysops.component';
import { AwscloudpractComponent } from './awscloudpract/awscloudpract.component';
import {CoursescompComponent} from './courses/coursescomp/coursescomp.component'

const routes: Routes = [
    // { path: '', redirectTo: 'customer', pathMatch: 'full' },
    // { path: 'customer', component: CustomersListComponent },
    // { path: 'add', component: CreateCustomerComponent },
    // { path: 'findbyage', component: SearchCustomersComponent },
    {
        path: 'home',
        component: HomeComponent
    },
    // { path: 'springbootintro', component: SpringbootintroComponent },
    // { path: 'microintro', component: MicroservicesintroComponent },
    // { path: 'awsdeveloper', component: AwsdeveloperComponent },
    // { path: 'contactus', component: ContactusComponent },
    // { path: 'awsarchitect', component: AwssolarchComponent },
    // { path: 'awssysops', component: AwssysopsComponent },
    // { path: 'awspract', component: AwscloudpractComponent },
    
    { path: 'courses', component: CoursescompComponent },
    
    
     {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: '**',redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
