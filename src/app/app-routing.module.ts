import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLayoutComponent } from './layout/home/home-layout/home-layout.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
