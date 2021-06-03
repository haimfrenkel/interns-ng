import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-real-password',
  templateUrl: './real-password.component.html',
  styleUrls: ['./real-password.component.css']
})
export class RealPasswordComponent implements OnInit {

  password: any
  constructor(private internsSService: InternsSService) { }

  ngOnInit(): void {
  }
  updatePass() {
   this.internsSService.addUser(this.password);
  }
}
