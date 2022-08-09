import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageComponent } from './full-page/full-page.component';
const routes: Routes = [
  {
    path: 'work',
    component: FullPageComponent,
    data: {
      page: 'work',
    },
  },
  {
    path: 'about',
    component: FullPageComponent,
    data: {
      page: 'about',
    },
  },
  {
    path: 'contact',
    component: FullPageComponent,
    data: {
      page: 'contact',
    },
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
