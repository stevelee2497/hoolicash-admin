import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpHelper: HelperService) {}

  getCategories() {
    return this.httpHelper.request<Category[]>('GET', '/category');
  }
}
