import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { routes } from './app.routes';

// Import the Swedish locale data
import localeSv from '@angular/common/locales/sv';
import { registerLocaleData } from '@angular/common';

// Register the locale data for Swedish
registerLocaleData(localeSv, 'sv');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'sv' },
  ],
};
