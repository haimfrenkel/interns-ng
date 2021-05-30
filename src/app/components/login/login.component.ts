import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  localData: any;
  constructor(private internsSService: InternsSService, private router: Router) { }

  ngOnInit(): void {
  }


  login(name: string, password: string) {
    this.internsSService.login(name, password).subscribe(data => {
      console.log(data)
      if (data) {
        this.router.navigate(["/start"])
      } else {
        alert("worng password")
      }
    })
  }
}
