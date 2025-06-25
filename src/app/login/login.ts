import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Authentication} from '../services/authentication';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  public loginFormGroup!: FormGroup;

  constructor(private fb : FormBuilder, private authService: Authentication,
              private router:Router) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
    })
  }

  login() {
    let username = this.loginFormGroup.value.username;
    let password = this.loginFormGroup.value.password;
    //console.log(username, password);
    let auth : boolean = this.authService.login(username, password);
    if (auth==true){
      this.router.navigateByUrl('/admin');
    }
  }
}
