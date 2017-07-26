import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnersComponent } from './partners/partners.component';

let RouteList;

export default  RouteList = [
  { path: '', component: DashboardComponent },
  { path: 'partners', component: PartnersComponent }
];