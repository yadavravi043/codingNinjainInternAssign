import { Component,OnInit } from '@angular/core';
import { MydatasService } from 'src/app/mydatas.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventsdata',
  templateUrl: './eventsdata.component.html',
  styleUrls: ['./eventsdata.component.css']
})
export class EventsdataComponent implements OnInit {
  count=0;
  myData:any;
  //event_category='';
   eventsubcategory='';
   tag_list='';
   offset='';
  constructor(private http:HttpClient,private activatedRoute :ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(data=>{
      console.log(data)
      // this.event_category = data['event_category'];
      this.eventsubcategory=data['event_sub_category'];
      // this.tag_list=data.tag_list;
      // this.offset=data.offset;
      // console.log(this.event_category)
      console.log(this.eventsubcategory)
    })
  }
  
 
  ngOnInit(): void {
    // console.log(this.event_category,"l31")
    this.http.get('https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENT&event_sub_category=Upcoming&tag_list=&offset')
    .subscribe((data)=>{
     this.myData=data;
    })
  }
}
