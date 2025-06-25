import {Component, OnInit} from '@angular/core';
import {Authentication} from '../services/authentication';

@Component({
  selector: 'app-admin-template',
  standalone: false,
  templateUrl: './admin-template.html',
  styleUrl: './admin-template.css'
})
export class AdminTemplate implements OnInit {

  constructor(public authService: Authentication) {
  }
  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
