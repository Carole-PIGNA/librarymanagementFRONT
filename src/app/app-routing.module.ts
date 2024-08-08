import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent} from './components/admin/admin.component';
import { LivresComponent } from './components/livres/livres.component';

const routes: Routes = [
  { path:'', component:LivresComponent},
  { path: 'accueil', component:LivresComponent},
  { path: 'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
