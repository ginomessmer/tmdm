import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./downloads/downloads.module').then(x => x.DownloadsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(x => x.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
