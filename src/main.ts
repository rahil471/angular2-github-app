import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders
])
.catch(err => console.error(err));
