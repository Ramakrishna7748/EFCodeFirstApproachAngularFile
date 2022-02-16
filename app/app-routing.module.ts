import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:"homepage", component:HomepageComponent},
  {path:"addcustomer", component:AddcustomerComponent},
  {path:"update/:CustomerId", component:UpdateComponent},
  {path:"View/:CustomerId", component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
