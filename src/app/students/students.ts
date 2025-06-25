import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements OnInit, AfterViewInit{

  public students :any;
  public dataSource : any;
  public displayedColumns = ["id","firstName","lastName","payments"];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private router : Router) {
  }

  ngOnInit() {
    this.students=[];
    for (let i = 0; i < 100; i++){
      this.students.push(
        {
          id:i,
          firstName: Math.random().toString(20),
          lastName: Math.random().toString(20),
          payments: Math.random()*10000
        }
      );
    }
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterStudents(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  getPayments(student: any) {
    this.router.navigateByUrl("/payments");
  }
}
