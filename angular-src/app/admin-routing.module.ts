import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent, AddUserComponent, EditUserComponent } from './users/users.component';
import { PartnersComponent, AddPartnerComponent, EditPartnerComponent } from './partners/partners.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        children: [
          { path: 'users', component: UsersComponent },
          { path: 'users/add', component: AddUserComponent },
          { path: 'users/:id', component: EditUserComponent },
          { path: 'partners', component: PartnersComponent },
          { path: 'partners/add', component: AddPartnerComponent },
          { path: 'partners/:id', component: EditPartnerComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}