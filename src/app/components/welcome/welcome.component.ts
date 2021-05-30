import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = this.internsSService.intern.name;
  constructor(private internsSService: InternsSService) { }

  ngOnInit(): void {
  }

}
