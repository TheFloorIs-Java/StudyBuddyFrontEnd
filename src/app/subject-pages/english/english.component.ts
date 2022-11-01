import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
/**
 * 
 * @param gservice when the user select english it retrive data from 
 * global service  and/or  save new info to global service 
 */
  constructor(public gservice : GlobalServiceService) { }
  English : string = "English";
  englishNum : number = 4;
  ngOnInit(): void {
  }

}
