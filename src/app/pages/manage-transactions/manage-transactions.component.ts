import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-manage-transactions',
  templateUrl: './manage-transactions.component.html',
  styleUrls: ['./manage-transactions.component.scss'],
})
export class ManageTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  loading: boolean = false;

  constructor(
    private transactionService: TransactionService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.loading = false;
        this.transactions = data;
      },
      (error: Error) => {
        this.loading = false;
        console.log(error);
        this.notification.error('Failed to get transactions', error.message);
      }
    );
  }

  onDelete(id: string) {
    this.loading = true;
    this.transactionService.deleteTransaction(id).subscribe(
      () => {
        this.loading = false;
        this.transactions = this.transactions.filter((x) => x.id !== id);
        this.notification.success(
          'Deleted Transaction successfully',
          'Transaction and all attached transactions will be deleted'
        );
      },
      (error: Error) => {
        this.loading = false;
        console.log(error);
        this.notification.error('Failed to delete Transaction', error.message);
      }
    );
  }
}
