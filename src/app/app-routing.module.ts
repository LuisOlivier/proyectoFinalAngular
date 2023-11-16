import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { MasInfoComponent } from './mas-info/mas-info.component';

const routes: Routes = [
  {path:"por-capital", component:PorCapitalComponent},
  {path:"por-pais", component:PorPaisComponent},
  {path:"por-region", component:PorRegionComponent},
  {path:"mas-info/:name", component:MasInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
