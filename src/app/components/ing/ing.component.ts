import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';

@Component({
  selector: 'app-ing',
  templateUrl: './ing.component.html',
  styleUrls: ['./ing.component.css']
})
export class IngComponent implements OnInit {
name = this.internsSService.intern.name;
  constructor(private internsSService: InternsSService) { }

  ngOnInit(): void {
  }

}
