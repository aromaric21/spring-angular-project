import {Component, OnInit} from '@angular/core';
import { StudentsService } from '../services/studentsService';
import {Student} from '../model/students.model';


@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements  OnInit {

  students!: Array<Student>;

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit() {
    this.studentsService.getStudents().subscribe({
      next: value => {
        this.students = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
