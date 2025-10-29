import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({ providedIn: 'root' })
export class BudgetImageService {
  async generateImage(element: HTMLElement): Promise<Blob> {
    try {
      const canvas = await html2canvas(element, {
        backgroundColor: '#121212',
        scale: 2,
      });

      return new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('No se pudo generar el blob del canvas'));
            }
          },
          'image/png',
          1 // calidad máxima
        );
      });
    } catch (err) {
      console.error('Error en html2canvas', err);
      throw err;
    }
  }
}
