import { Component, OnInit } from '@angular/core';
import { InternsSService } from 'src/app/services/interns-s.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  localData = {}
  constructor(private internsSService: InternsSService) { }

  ngOnInit(): void {
  }
  getOne(){
    this.internsSService.getUser().subscribe(data=>{
      console.log(data), this.localData = data
    })
  }
}
