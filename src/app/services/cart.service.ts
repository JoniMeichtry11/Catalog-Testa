import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Item } from '../models/Item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _cart = signal<CartItem[]>([]);

  cart = computed(() => this._cart());
  totalItems = computed(() =>
    this._cart().reduce((sum, i) => sum + i.qty, 0)
  );

  add(item: Item) {
    this._cart.update(c => {
      const existing = c.find(ci => ci.code === item.code);
      if (existing) {
        return c.map(ci =>
          ci.code === item.code ? { ...ci, qty: ci.qty + 1 } : ci
        );
      }
      return [...c, { ...item, qty: 1 }];
    });
  }

  removeOne(item: CartItem) {
    this._cart.update(c =>
      c
        .map(ci =>
          ci.code === item.code ? { ...ci, qty: ci.qty - 1 } : ci
        )
        .filter(ci => ci.qty > 0)
    );
  }

  clear() {
    this._cart.set([]);
  }

  whatsappLink(phone: string) {
    if (this._cart().length === 0) return '#';
    const lines = this._cart().map(i => `• ${i.code} - ${i.name} (x${i.qty})`).join('\n');
    const msg = `Hola, quiero solicitar los siguientes productos:\n\n${lines}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }
}
