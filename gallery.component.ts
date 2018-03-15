import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map" ;
import {GalleryService} from '../../services/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
pagePhotos:any={hits:[]};
keyWord:string="";
currentPage:number=1;
size:number=5;
totalPages:number;
pages:Array<number>=[];
  constructor(private galleryService:GalleryService) { }

  ngOnInit() {
  }

  goToPage(i){
    this.currentPage=i+1;
    this.onSearch({keyWord:this.keyWord});

  }
  onSearch(dataForm){

  this.galleryService.search(this.keyWord,this.size,this.currentPage)
    .subscribe(data=>{

      this.pagePhotos=data;
      this.totalPages=Math.floor( data.totalHits/this.size);
      if(data.totalHits % this.size !=0) ++this.totalPages;
      this.pages=new Array(this.totalPages);





    },err=>{
      console.log(err);
    })

}

}
