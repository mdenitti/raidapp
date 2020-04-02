import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../src/app/shared/services/api.service';
import { DecimalPipe } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './core/app.routing.module';
import { CustomMaterialModule } from "./core/material.module";

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AuthService } from '../../src/app/shared/services/firebaseauth.service';

import { Organisation } from './shared/model/organisations.model';
import { Contact } from './shared/model/contacts.model';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login/login.component';
import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NavigationLayoutComponent } from './navigation/navigation-layout/navigation-layout.component';
import { ChartComponent } from './charts/chart/chart.component';
import { HomeComponent } from './home/home/home.component';
import { OrganisationsComponent } from './organisations/organisations/organisations.component';
import { OrganisationaddComponent } from './organisations/organisationadd/organisationadd.component';
import { OrganisationeditComponent } from './organisations/organisationedit/organisationedit.component';
import { OrganisationdeleteComponent } from './organisations/organisationdelete/organisationdelete.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { ContacteditComponent } from './contacts/contactedit/contactedit.component';
import { ContactaddComponent } from './contacts/contactadd/contactadd.component';
import { ContactdeleteComponent } from './contacts/contactdelete/contactdelete.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { QuotesComponent } from './quotes/quotes/quotes.component';
import { QuoteseditComponent } from './quotes/quotesedit/quotesedit.component';
import { QuotesdeleteComponent } from './quotes/quotesdelete/quotesdelete.component';
import { QuotesaddComponent } from './quotes/quotesadd/quotesadd.component';
import { ProductsComponent } from './products/products/products.component';
import { ProducteditComponent } from './products/productedit/productedit.component';
import { ProductdeleteComponent } from './products/productdelete/productdelete.component';
import { ProductaddComponent } from './products/productadd/productadd.component';

// Required components for which route services to be activated
import { DashboardComponent } from './authentication/dashboard/dashboard.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';

// Import canActivate guard services
import { AuthGuard } from "../app/shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../app/shared/guard/secure-inner-pages.guard";



const appRoutes: Routes = [
  { path: '', redirectTo: 'sign-in', data: { title: 'SignIn Component' }, pathMatch: 'full' },
  //for authentication
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  //
  { path: 'organisationedit/:id', component: OrganisationeditComponent },
  { path: 'contactedit/:id', component: ContacteditComponent },
  { path: 'organisationdelete/:id', component: OrganisationdeleteComponent },
  { path: 'contactdelete/:id', component: ContactdeleteComponent },
  { path: 'quotesedit/:id', component: QuoteseditComponent },
  { path: 'quotesdelete/:id', component: QuotesdeleteComponent },
  { path: 'productedit/:id', component: ProducteditComponent },
  { path: 'productdelete/:id', component: ProductdeleteComponent },
  {
    path: 'login', component: LoginLayoutComponent, data: { title: 'Login Component' },
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'main', component: NavigationComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'charts', component: ChartComponent },
      { path: 'organisations', component: OrganisationsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'quotes', component: QuotesComponent },
      { path: 'organisationadd', component: OrganisationaddComponent },
      { path: 'contactadd', component: ContactaddComponent },
      { path: 'productadd', component: ProductaddComponent },
      { path: 'quotesadd', component: QuotesaddComponent },
      { path: 'organisationdelete', component: OrganisationdeleteComponent },
      { path: 'contactdelete', component: ContactdeleteComponent },
      { path: 'productdelete', component: ProductdeleteComponent },
      { path: 'quotesdelete', component: QuotesdeleteComponent }
    ]
  }
];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginLayoutComponent,
    NavigationComponent,
    NavigationLayoutComponent,
    ChartComponent,
    HomeComponent,
    OrganisationsComponent,
    OrganisationaddComponent,
    OrganisationeditComponent,
    OrganisationdeleteComponent,
    ContactsComponent,
    ContacteditComponent,
    ContactaddComponent,
    ContactdeleteComponent,
    ToolbarComponent,
    QuotesComponent,
    QuoteseditComponent,
    QuotesdeleteComponent,
    QuotesaddComponent,
    ProductsComponent,
    ProducteditComponent,
    ProductdeleteComponent,
    ProductaddComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only
    ),
    CustomMaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [ApiService, AuthService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
