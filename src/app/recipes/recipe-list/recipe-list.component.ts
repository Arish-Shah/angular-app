import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://source.unsplash.com/user/nobiteuntilphoto/likes/500x500'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://source.unsplash.com/user/nobiteuntilphoto/likes/500x500'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
