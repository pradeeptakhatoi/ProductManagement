import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AddformComponent } from './product-form/addform/addform.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },   
      {
        path: 'product-forms',
        component: ProductFormComponent,
      }, 
      {
        path: 'addform',
        component: AddformComponent,
      }, 
      {
        path: 'products',
        component: ProductComponent,
      },      
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [      
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    SignupComponent
  ]
})
export class AppRoutingModule { }
