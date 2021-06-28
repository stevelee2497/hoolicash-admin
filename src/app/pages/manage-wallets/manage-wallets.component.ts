import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-manage-wallets',
  templateUrl: './manage-wallets.component.html',
  styleUrls: ['./manage-wallets.component.scss'],
})
export class ManageWalletsComponent implements OnInit {
  wallets: Wallet[] = [];
  loading: boolean = false;

  constructor(private walletService: WalletService, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.loading = true;
    this.walletService.getWallets().subscribe(
      (data: Wallet[]) => {
        this.loading = false;
        this.wallets = data;
      },
      (error: Error) => {
        this.loading = false;
        console.log(error);
        this.notification.error('Failed to get wallets', error.message);
      }
    );
  }

  onDelete(id: string) {
    this.loading = true;
    this.walletService.deleteWallet(id).subscribe(
      () => {
        this.loading = false;
        this.wallets = this.wallets.filter((x) => x.id !== id);
        this.notification.success(
          'Deleted Wallet successfully',
          'Wallet and all attached transactions will be deleted'
        );
      },
      (error: Error) => {
        this.loading = false;
        console.log(error);
        this.notification.error('Failed to delete Wallet', error.message);
      }
    );
  }
}
