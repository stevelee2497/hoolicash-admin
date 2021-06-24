import { Injectable } from '@angular/core';

export interface Category {
  id: string;
  name: string;
  type: string;
  transactions: number;
  icon: string;
  createdAt: string;
  iconUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [];

  constructor() {}

  getCategories() {
    return this.categories;
  }
}
