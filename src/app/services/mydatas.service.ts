import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MydatasService {

  constructor(private http:HttpClient) { }

  
  getEventsData(){
    return this.http.get('https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENT&event_sub_category=Archived&tag_list=&offset')
  }
  getTagsData(){
    return this.http.get('https://api.codingninjas.com/api/v3/event_tags')
  }

}
