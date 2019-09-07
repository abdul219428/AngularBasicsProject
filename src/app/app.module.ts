import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http"; // use npm install @angular/http@latest inorder to import this module

// local imports
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { EmployeeTitlePipe } from "./employee/employeeTitle.pipe";
import { EmployeeCountComponent } from "./employee/employee-count/employee-count.component";
import { SimpleComponent } from "./others/simple.component";
import { EmployeeService } from "./employee/employee.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./others/pageNotFound.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "employees/:code", component: EmployeeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
