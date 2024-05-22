import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MapComponentComponent } from './map/map-component/map-component.component';
import { ParentComponent } from './map/parent/parent.component';
import { authGuard } from './service/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path:'counter', loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule)},
  {path:'post', loadChildren: () => import('./post/post.module').then((m) => m.postModule), canActivate: [authGuard]},
  {path:'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
  {path:'map', component:MapComponentComponent},
  {path:'parent', component:ParentComponent},
  // {path:'post', component: PostlistComponent, children : [ 
  //   { path: 'add', component: AddpostComponent},
  //   { path: 'edit/:id', component: EditpostComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
