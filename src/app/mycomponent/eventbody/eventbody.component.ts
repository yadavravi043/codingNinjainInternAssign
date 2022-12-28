import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-eventbody',
  templateUrl: './eventbody.component.html',
  styleUrls: ['./eventbody.component.css']
})
export class EventbodyComponent implements OnInit {
  event_category:any='';
  event_sub_category:any=''
  tag_list:any=''
  offset:any='';

  ngOnInit(): void {
    
   }
}