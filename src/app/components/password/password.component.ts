import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';
import { TouchSequence } from 'selenium-webdriver';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  name = this.internsSService.intern.name;

  num1 = null;
  num2 = null;
  num3 = null;
  num4 = null;

  next = false
  constructor(private internsSService: InternsSService, private router: Router) { }

  ngOnInit(): void {
  }
  check() {
    if (this.num1 == this.internsSService.sms.num1 &&
      this.num2 == this.internsSService.sms.num2 &&
      this.num3 == this.internsSService.sms.num3 &&
      this.num4 == this.internsSService.sms.num4) {
      this.next = true


      

        
      this.router.navigate(["/realPassword"]);

    } else {
      alert("The password you entered is incorrect")
    }
  }
}