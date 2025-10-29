import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'catalogo-testa-hermanos',
        appId: '1:582569828614:web:80409334ea53801c43be87',
        storageBucket: 'catalogo-testa-hermanos.firebasestorage.app',
        apiKey: 'AIzaSyASJdiFkGlRA96kJIRdyIUzWZT_ZzWgu4c',
        authDomain: 'catalogo-testa-hermanos.firebaseapp.com',
        messagingSenderId: '582569828614',
        measurementId: 'G-C1NZKEX56V',
      })
    ),
  ],
};
