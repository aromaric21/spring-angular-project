import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentsService} from '../services/studentsService';
import {Payment} from '../model/students.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails implements  OnInit {

  studentCode!: string;
  studentPayments!:Array<Payment>;
  paymentsDataSource!: MatTableDataSource<Payment>;
  public displayedColumns:string[] = ['id', 'date','amount', 'type', 'status', 'firstName', 'details'];

  constructor(private activatedRouter: ActivatedRoute,
              private studentsService: StudentsService,
              private router: Router) {
  }

  ngOnInit() {
    this.studentCode = this.activatedRouter.snapshot.params['code'];
    this.studentsService.getStudentPayments(this.studentCode).subscribe({
      next: value =>{
        this.studentPayments = value;
        this.paymentsDataSource = new MatTableDataSource<Payment>(this.studentPayments);
      },
        error: err => {
        console.log(err)
      }
    })
  }

  newPayment() {
    this.router.navigateByUrl(`/admin/new-payment/${this.studentCode}`);
  }

  paymentDetails(payment: Payment) {
    this.router.navigateByUrl(`/admin/payment-details/${payment.id}`);
  }
}
