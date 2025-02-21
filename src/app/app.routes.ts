import { Routes } from '@angular/router';
import { WrapperButtonComponent } from '@features/button/wrapper-button/wrapper-button.component';
import { WrapperDynamicTableComponent } from '@features/dynamic-table/wrapper-dynamic-table/wrapper-dynamic-table.component';
import { ReactiveFormComponent } from '@features/reactive-form/reactive-form.component';
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
];
