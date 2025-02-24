import { Routes } from '@angular/router';
import { WrapperButtonComponent } from '@features/button/wrapper-button/wrapper-button.component';
import { WrapperDynamicTableComponent } from '@features/dynamic-table/wrapper-dynamic-table/wrapper-dynamic-table.component';
import { InputPasswordComponent } from '@features/input-password/input-password.component';
import { InputComponent } from '@features/input/input.component';
import { LoginComponent } from '@features/login/login.component';
import { ReactiveFormComponent } from '@features/reactive-form/reactive-form.component';
import { RegisterComponent } from '@features/register/register.component';
import { TableComponent } from '@features/table/table.component';
import { HomeComponent } from '@shared/components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    title: "Home",
  },
  {
    path: "reactive-form",
    component: ReactiveFormComponent,
    title: "Reactive Form",
  },
  {
    path: "dynamic-button",
    component: WrapperButtonComponent,
    title: "Dynamic Button",
  },
  {
    path: "table",
    component: TableComponent,
    title: "Table",
  },
  {
    path: "dynamic-table",
    component: WrapperDynamicTableComponent,
    title: "Dynamic Table",
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Login",
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Register",
  },
  {
    path: "input",
    component: InputComponent,
    title: "Input",
  },
  {
    path: "input-password",
    component: InputPasswordComponent,
    title: "Input Password",
  },
];
