import {Component, OnInit} from '@angular/core';
import {AppRoutePrefixes} from '../../router-links';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  readonly CUCUMBER_ROUTING_LINK: string = AppRoutePrefixes.CUCUMBER_PREFIX;

  constructor() {
  }

  ngOnInit() {
  }

}
