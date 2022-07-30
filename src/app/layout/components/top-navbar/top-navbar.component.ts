import { MediaMatcher } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AlertService } from '../../../core/alert/alert.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'p-plant-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
  @Input() isLeftExpanded: boolean = false;
  @Input() isRightExpanded: boolean = false;
  @Output() isLeftExpandedChange = new EventEmitter<boolean>();
  @Output() isRightExpandedChange = new EventEmitter<boolean>();
  pending: boolean = false;
  hasProfileImg: boolean = false;

  @Input('mobileQuery') mobileQuery!: MediaQueryList;

  constructor(
    private router: Router,
    public userService: UserService,
    private alertSrv: AlertService,
    private dialog: MatDialog
  ) {}

  getImageUrl(): string {
    return '';
  }

  ngOnInit(): void {}

  openAlarms() {
    this.isRightExpandedChange.emit(true);
  }

  onEditProfile(menu: MatMenuTrigger) {
    // menu.closeMenu();
    // this.dialog.open(ProfileDialog);
  }

  onLogout() {
    this.userService.onLogout();
    this.router.navigate(['auth/login']);
    this.alertSrv.showToaster('You logged out Successfully!', 'INFO');
  }
}
