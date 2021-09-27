import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'read', component: ReadComponent},
  {path: 'write', component: WriteComponent},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
