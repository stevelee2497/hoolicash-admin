import { Injectable } from '@angular/core';
import { Wallet } from '../models/wallet';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor(private httpHelper: HelperService) {}

  getWallets() {
    return this.httpHelper.request<Wallet[]>('GET', '/wallet');
  }

  deleteWallet(id: string) {
    return this.httpHelper.request<Wallet>('DELETE', `/wallet/${id}`);
  }
}
