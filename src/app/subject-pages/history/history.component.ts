import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
 /**
 * 
 * @param gservice when the user select history it retrive data like history home word report card and tips  from 
 * global service  and/or  save new  added info to global service 
 */
  constructor(public gservice : GlobalServiceService) { }
  History : string = "History";
  histroyNum : number = 3;
  ngOnInit(): void {
  }

}
