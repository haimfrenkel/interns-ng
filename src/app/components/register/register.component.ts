import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ID: any;
  name: any;
  email: any;
  phon: any;

  constructor(private internsSService: InternsSService) { }

  ngOnInit(): void {
  }
  register() {
    this.internsSService.intern.ID = this.ID;
    this.internsSService.intern.name = this.name;
    this.internsSService.intern.email = this.email;
    this.internsSService.intern.phon = this.phon;
    console.log(this.internsSService.intern)
  }
}

