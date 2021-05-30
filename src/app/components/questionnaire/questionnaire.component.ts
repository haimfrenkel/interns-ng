import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  age: any;
  country: any;
  city: any;
  graduation: any;
  acadaemicInstitution: any
  constructor(private internsSService: InternsSService) { }

  ngOnInit(): void {
  }
  register() {
    this.internsSService.intern.age = this.age;
    this.internsSService.intern.country = this.country;
    this.internsSService.intern.city = this.city;
    this.internsSService.intern.graduation = this.graduation;
    this.internsSService.intern.acadaemicInstitution = this.acadaemicInstitution;
  }
}
