import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss'],
})
export class ManageCategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit(): void {}
}
