import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {StudentsService} from '../services/studentsService';

@Component({
  selector: 'app-payments',
  standalone: false,
  templateUrl: './payments.html',
  styleUrl: './payments.css'
})
export class Payments implements OnInit{

  public payments:any;
  public dataSource:any;
  public displayedColumns:string[] = ['id', 'date','amount', 'type', 'status', 'firstName'];

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit() {
    this.studentsService.getAllPayments().subscribe( {
      next: data => {
        this.payments = data;
        this.dataSource = new MatTableDataSource(this.payments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        //console.log(this.payments);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
