import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerRouterComponent } from './inner-router/inner-router.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { CardComponent } from './component/card/card.component';
import { ListCardComponent } from './component/list-card/list-card.component';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { MaterialModule } from './material/material.module';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { OrderSummaryComponent } from './component/order-summary/order-summary.component';
import { SummaryComponent } from './component/summary/summary.component';
import { AdministrativeAreaComponent } from './component/Admin/administrative-area/administrative-area.component';
import { LoginManagerComponent } from './component/Admin/login-manager/login-manager.component';
import { LoginUsersComponent } from './component/Users/login-users/login-users.component';
import { RegisterUsersComponent } from './component/Users/register-users/register-users.component';
import { AddProdctComponent } from './component/Admin/add-prodct/add-prodct.component';
import { AllProdctManagerComponent } from './component/Admin/all-prodct-manager/all-prodct-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    InnerRouterComponent,
    NavBarComponent,
    FooterComponent,
    CardComponent,
    ListCardComponent,
    ShopingCartComponent,
    PaymentPageComponent,
    OrderSummaryComponent,
    SummaryComponent,
    AdministrativeAreaComponent,
    LoginManagerComponent,
    LoginUsersComponent,
    RegisterUsersComponent,
    AddProdctComponent,
    AllProdctManagerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
