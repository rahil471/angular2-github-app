import {provideRouter, RouterConfig} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: RouterConfig = [ /** array of routes */
  { path: 'home', component:  HomeComponent},
  { path: 'about', component:  AboutComponent},
  { path: '', redirectTo: 'home'}
];

export const appRouterProviders = [
  provideRouter(routes) /** this function takes in the array of routes 
                            and returns the configured Router service provider.
                         */
];