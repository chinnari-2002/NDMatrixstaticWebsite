import { Routes } from '@angular/router';
import { NDMatrixHomePage } from './components/n-dmatrix-home-page/n-dmatrix-home-page';
import { ContactPage } from './components/contact-page/contact-page';
import { MainProducts } from './components/main-products/main-products';
import { CareerPage } from './components/career-page/career-page';


export const routes: Routes = [
    {path:'', component:NDMatrixHomePage},
    {path:'Contact',component:ContactPage},
    //  {path:'software-development-center/products', component:MainProducts},
     {path:'Careers', component:CareerPage}

];
