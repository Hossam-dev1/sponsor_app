import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SponsorComponent } from "./sponsor.component";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sponsor.component').then(m => m.SponsorComponent),
    children: [
      {
        path: 'list',
        loadComponent: () => import('./components/list/list.component').then(m => m.ListComponent),
      },
      {
        path: 'add',
        loadComponent: () => import('./components/add/add.component').then(m => m.AddComponent),
      }
    ]

  }
]

@NgModule({
  imports: [
    CommonModule,
    SponsorComponent,
    RouterModule.forChild(routes)
  ],
  providers: [
  ]
})

export class SponsorModule { }
