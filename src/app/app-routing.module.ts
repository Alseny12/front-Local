import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [{path:'hotels/:p1/:p2',component:HotelsComponent},
                                                 {path:'',redirectTo:'hotels/1/0',pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
