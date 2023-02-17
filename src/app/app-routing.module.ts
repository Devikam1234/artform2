import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
   {
    path:'artforms',component:ArtformsComponent
   },
   {
    path:'signin',component:SigninComponent
   },
   {
    path:'signup',component:SignupComponent
   },
   {
    path:'contact',component:ContactComponent
   },
   {
    path:'single',component:SingleComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
