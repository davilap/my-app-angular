import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MainContentComponent } from './layout/main-content/main-content.component';
import { HomeLayoutComponent } from './layout/home/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { CustomModalComponent } from './views/custom-modal/custom-modal.component';

import { HelperModule } from './helpers/helpers.module';
import { ServicesModule } from './services/services.module';

import { MatchValueDirective } from './directives/match-value.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    HomeLayoutComponent,
    HomePageComponent,
    MatchValueDirective,
    CustomModalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HelperModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
