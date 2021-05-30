import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';

@Component({
  selector: 'app-questionnaier2',
  templateUrl: './questionnaier2.component.html',
  styleUrls: ['./questionnaier2.component.css']
})
export class Questionnaier2Component implements OnInit {
  medicalInstitution: any;
  residency: any;
  department: any;
  yearInResidency = 0;
  constructor(private internsSService: InternsSService) { }

  ngOnInit(): void {
  }
  register() {
    this.internsSService.intern.medicalInstitution = this.medicalInstitution;
    this.internsSService.intern.residency = this.residency;
    this.internsSService.intern.department = this.department;
    this.internsSService.intern.yearInResidency = this.yearInResidency;
    this.internsSService.updateUser();
  }

}
