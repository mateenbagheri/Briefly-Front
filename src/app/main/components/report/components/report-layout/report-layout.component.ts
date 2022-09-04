import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-report-layout',
  templateUrl: './report-layout.component.html',
})
export class ReportLayoutComponent implements OnInit {

  constructor(private readonly router : Router,private readonly userService : UserService) { }

  ngOnInit(): void {
    if(!this.userService.token)
    this.router.navigate(['./briefly/home'])
  }

}
