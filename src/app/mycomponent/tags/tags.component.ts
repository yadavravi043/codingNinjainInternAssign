import { Component, OnInit } from '@angular/core';
import { MydatasService } from 'src/app/services/mydatas.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  myData :any;
  // myData$:any;
  constructor(private myDataService:MydatasService){}
  
   ngOnInit(): void {
       this.myDataService.getTagsData()
       .subscribe((data)=>{
        this.myData=data;
       })
      }
}
