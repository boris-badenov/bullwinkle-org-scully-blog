import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './home/admin-home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
  },
  {
    path: '**',
    component: AdminHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
