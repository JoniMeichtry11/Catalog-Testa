import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { Item } from './models/Item';
import { CartService } from './services/cart.service';
import { BudgetPreview } from './components/budget-preview/budget-preview';
import { BudgetImageService } from './services/budget-image.service';
import { items } from './data/catalogo';


@Component({
  selector: 'app-root',
  imports: [BudgetPreview],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  query = signal('');
  showCart = signal(false);
  @ViewChild('budgetPreview', { static: false }) budgetPreviewEl!: ElementRef;

  items: Item[] = items;

  constructor(public cart: CartService, private budgetImage: BudgetImageService) {}

  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.items;
    return this.items.filter(i =>
      i.code.toLowerCase().includes(q) ||
      i.name.toLowerCase().includes(q)
    );
  });

  setQuery(v: string) {
    this.query.set(v);
  }

  // app.component.ts
  getQty(code: string) {
    const found = this.cart.cart().find(ci => ci.code === code);
    return found ? found.qty : 0;
  }

  async shareBudget() {
    if (!this.budgetPreviewEl) return;

    try {
      const blob = await this.budgetImage.generateImage(
        this.budgetPreviewEl.nativeElement
      );
      const file = new File([blob], 'presupuesto.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Pedido',
          text: '' // podés dejarlo vacío
        });
      } else {
        alert('La opción de compartir no está soportada en este dispositivo/navegador.');
      }
    } catch (err) {
      console.error('Error al compartir presupuesto', err);
    }
  }
}
