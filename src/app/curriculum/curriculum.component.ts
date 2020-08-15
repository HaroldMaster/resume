
import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service'
import { GitService } from './../services/git.service'

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
  providers: [DataService, GitService]
})
export class CurriculumComponent implements OnInit {
  public data : any;
  constructor(
    public _data : DataService,
    public _git : GitService
  ) { 
    this.data = this._data;
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
