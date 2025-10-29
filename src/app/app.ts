import { Component, computed, signal } from '@angular/core';
import { Item } from './models/Item';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  query = signal('');
  showCart = signal(false);

  items: Item[] = [
    { code: 'M01', name: 'ABRAZADERA PLANA 1/2"' },
    { code: 'M02', name: 'ABRAZADERA PLANA 3/4"' },
    { code: 'M33', name: 'BULON DE 1/2" X 6" INOX' },
    { code: 'M41', name: 'GRAMPAS CIERRE 3/8" INOX' },
    { code: 'M49', name: 'CRUCETA CHAPA 25 X 25 X 1.5' },
    { code: 'M01', name: 'ABRAZADERA PLANA 1/2"' },
    { code: 'M02', name: 'ABRAZADERA PLANA 3/4"' },
    { code: 'M33', name: 'BULON DE 1/2" X 6" INOX' },
    { code: 'M41', name: 'GRAMPAS CIERRE 3/8" INOX' },
    { code: 'M49', name: 'CRUCETA CHAPA 25 X 25 X 1.5' },
    { code: 'M01', name: 'ABRAZADERA PLANA 1/2"' },
    { code: 'M02', name: 'ABRAZADERA PLANA 3/4"' },
    { code: 'M33', name: 'BULON DE 1/2" X 6" INOX' },
    { code: 'M41', name: 'GRAMPAS CIERRE 3/8" INOX' },
    { code: 'M49', name: 'CRUCETA CHAPA 25 X 25 X 1.5' },
  ];

  constructor(public cart: CartService) {}

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

}
