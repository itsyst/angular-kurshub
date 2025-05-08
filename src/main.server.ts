import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

import { registerLocaleData } from '@angular/common';
import localeSv from '@angular/common/locales/sv';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Register Swedish locale for the server
registerLocaleData(localeSv, 'sv');

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
