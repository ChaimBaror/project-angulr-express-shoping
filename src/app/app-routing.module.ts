import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerRouterComponent } from './inner-router/inner-router.component';
import { SummaryComponent } from './component/summary/summary.component';

import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AllProdctManagerComponent } from './component/Admin/all-prodct-manager/all-prodct-manager.component';



const routes: Routes = [
  { path: '', component: InnerRouterComponent },
  { path: 'shoping-cart', component: SummaryComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'admin', component:   AllProdctManagerComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
