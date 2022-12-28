import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlleventComponent } from './mycomponent/allevent/allevent.component';
import { BottomfooterComponent } from './mycomponent/bottomfooter/bottomfooter.component';
import { HomeComponent } from './mycomponent/home/home.component';
import { TopfooterComponent } from './mycomponent/topfooter/topfooter.component';

const routes: Routes = [
{
  path:'',component:HomeComponent
},
{
  path:'top-footer',component:TopfooterComponent
},
{
  path:'bottom-footer',component:BottomfooterComponent
},
{
  path:'events',component:AlleventComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
