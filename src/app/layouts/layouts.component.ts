import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})
export class LayoutsComponent implements OnInit {
  isCollapsed = false;
  constructor() {}

  ngOnInit(): void {}
}
