import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import Error from 'src/app/models/error';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss'],
})
export class ManageCategoriesComponent implements OnInit {
  categories: Category[] = [];
  loading: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.loading = false;
        this.categories = data;
      },
      (error: Error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  onDelete(id: string) {
    this.loading = true;
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.loading = false;
        this.categories = this.categories.filter((x) => x.id !== id);
        this.notification.success(
          'Deleted category successfully',
          'Category and all attached transactions will be deleted'
        );
      },
      (error: Error) => {
        this.loading = false;
        console.log(error);
        this.notification.error('Failed to delete Category', error.message);
      }
    );
  }
}
