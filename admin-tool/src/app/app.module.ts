import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthGuard } from './services/guard/auth.guard';
import { PermissionGuard } from './services/guard/permission.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminLayoutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    PermissionGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
