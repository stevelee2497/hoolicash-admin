import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private httpHelper: HelperService) {}

  getTransactions() {
    return this.httpHelper.request<Transaction[]>('GET', '/transaction');
  }

  deleteTransaction(id: string) {
    return this.httpHelper.request<Transaction>('DELETE', `/transaction/${id}`);
  }
}
