import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  event_category:any='ALL_EVENT';
  event_sub_category:any='Upcoming'
  tag_list:any=''
  offset:any='';
  ngOnInit(): void {
    
  }
}
