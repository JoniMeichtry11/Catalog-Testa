import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

interface CartItem {
  code: string;
  name: string;
  qty: number;
}

@Component({
  selector: 'app-budget-preview',
  standalone: true,
  templateUrl: './budget-preview.html',
  styleUrls: ['./budget-preview.scss'],
  imports: [DatePipe],
})
export class BudgetPreview {
  @Input({ required: true }) items: CartItem[] = [];
  readonly now = new Date();
}
