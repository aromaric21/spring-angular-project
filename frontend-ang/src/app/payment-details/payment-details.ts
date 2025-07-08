import {Component, OnInit} from '@angular/core';
import {StudentsService} from '../services/studentsService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment-details',
  standalone: false,
  templateUrl: './payment-details.html',
  styleUrl: './payment-details.css'
})
export class PaymentDetails implements OnInit{

  paymentId!: number;
  pdfFileUrl!: any;

  constructor(private studentsService: StudentsService,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.paymentId = this.router.snapshot.params['id'];
    this.studentsService.getPaymentDetails(this.paymentId).subscribe({
      next: value => {
       let blob : Blob = new Blob([value], {type: 'application/pdf'});
       this.pdfFileUrl = window.URL.createObjectURL(blob);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  afterLoadComplete(event: any) {
  }
}
