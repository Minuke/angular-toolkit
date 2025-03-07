import { Routes } from '@angular/router';
import { ButtonComponent } from '@features/button/button.component';
import { InputComponent } from '@features/input/input.component';
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
    path: "button",
    component: ButtonComponent,
    title: "Button",
  },
  {
    path: "input",
    component: InputComponent,
    title: "Input",
  },
];
