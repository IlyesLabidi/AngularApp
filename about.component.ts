import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  comment={date:null,message:""};
  info:any;
  comments=[];
  constructor(private  aboutService:AboutService) {
    this.info=this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();
  }

  ngOnInit() {
  }

  onAddComment(c){

this.aboutService.addComment(c);
    this.comment={date:null,message:""};




  }


}
