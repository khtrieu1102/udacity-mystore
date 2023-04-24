import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillingInformation } from 'src/app/models/BillingInformation';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  billInformation: BillingInformation = {
    total: 0,
    address: '',
    creditCardNumber: '',
    fullname: '',
  };

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.billInformation = this.cartService.generateFinalResult();
  }

  onBack(): void {
    this.route.navigate(['']);
  }
}
