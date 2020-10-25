import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutePrefixes} from './router-links';
import {HomepageComponent} from './features/homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: AppRoutePrefixes.CUCUMBER_PREFIX,
    loadChildren: () => import('./features/cucumber/cucumber.module').then(m => m.CucumberModule)
  },
  {
    path: '**',
    redirectTo: AppRoutePrefixes.DEFAULT_PREFIX
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
