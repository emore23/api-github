import { ContributorsService } from './../services/contributors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  constructor(
    private contributorService:ContributorsService
  ) { }

  ngOnInit(): void {
   // console.log(this.contributorService.getContributors())
  }

}
