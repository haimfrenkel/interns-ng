import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';

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
    this.internsSService.updatePass(this.password)
    console.log(this.password);
  }
}
