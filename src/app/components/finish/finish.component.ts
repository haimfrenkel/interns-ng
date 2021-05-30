import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private internsSService: InternsSService) { }

  ngOnInit(): void {
  }
  getUser() {
    this.internsSService.getUser()
  }
}
