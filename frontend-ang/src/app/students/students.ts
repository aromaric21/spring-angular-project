import {Component, OnInit} from '@angular/core';
import { StudentsService } from '../services/studentsService';
import {Student} from '../model/students.model';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css'
})

export class Students implements  OnInit {

  students!: Array<Student>;
  studentsDataSource!: MatTableDataSource<Student>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'code', 'programId', 'payments'];

  constructor(private studentsService: StudentsService, private router:Router) {
  }
  ngOnInit() {
    this.studentsService.getStudents().subscribe({
      next: value => {
        this.students = value;
        this.studentsDataSource = new MatTableDataSource<Student>(this.students);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  studentPayments(student: Student) {
    this.router.navigateByUrl(`/admin/student-details/${student.code}`);
  }
}
