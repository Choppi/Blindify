import { Component, Input } from '@angular/core';
import { Category } from '../../model/category.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  public category: Category;

  toggleCategory() {
    this.category.selected = !this.category.selected;
  }
}
