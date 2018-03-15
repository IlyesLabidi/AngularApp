import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export  class  GalleryService{
  constructor(private http:Http){

  }

  search(keyWord:string,size:number,page:number){

    return this.http.get("https://pixabay.com/api/?key=8320727-e8424f8c4b56b7d723b2c1393&q="
      +keyWord+"&per_page="+size+"&page="+page)
      .map(resp=>resp.json())


  }

}
