import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./pages/sponsor/sponsor.module').then(m => m.SponsorModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 0],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
