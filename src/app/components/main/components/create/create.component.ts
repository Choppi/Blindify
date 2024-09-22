import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from "../../../card/card.component";
import allCategories from '../../../../../assets/categories.json';
import { Category } from '../../../../model/category.model';
import { Filter } from '../../../../model/filter.enum';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CardComponent, MatButtonModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  public categories: Category[];

  public decades: Category[];

  numberPlayers: number;

  numberTracks: number;

  gameName: string;

  constructor() {
    this.categories = allCategories.filter(c => c.filter === Filter.STYLE).map(c => new Category(c.name, c.color, c.selected))
    this.decades = allCategories.filter(c => c.filter === Filter.DECADE).map(c => new Category(c.name, c.color, c.selected))
  }

  createGame() {
    console.log(this.gameName);
    console.log(this.numberTracks);
    console.log(this.numberPlayers);
    console.log(this.categories.filter(c => c.selected));
    console.log(this.decades.filter(c => c.selected));
  }
}
