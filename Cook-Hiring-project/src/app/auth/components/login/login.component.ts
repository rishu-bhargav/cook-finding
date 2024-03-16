import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isVisible: boolean = true
  constructor(private route :Router) { }

  ngOnInit(): void {
  
  }
  onSubmit(){
    this.route.navigate(['signup'])
  }
  onEmploye() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
    this.route.navigate(['employesignup']);
  }
  }

