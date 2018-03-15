import {Injectable} from '@angular/core';

@Injectable()
export class AboutService {
  info={

    name:" ILyes",
    email:"ilyes@gmail.com",
    mobile:178999999
  }


  comments=[
    {date:new Date(), message:"sehr schön"},
    {date:new Date(), message:"gut"},
    {date:new Date(), message:":)"}

  ]

  addComment(c){
    c.date=new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }
  getInfo(){
    return this.info;
  }

}
