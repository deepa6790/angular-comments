import { Component, OnInit } from '@angular/core';
import { HomeService } from './home-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  commentList;
  commentLists;
  errorMessage; 
  counter : number = 1;
  
  constructor(private HomeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.comments();
  }
  
  comments(){
    this.commentList = this.HomeService.getCommentList(this.counter);
    
    this.commentList.then(
      comments => {
        console.log(comments);
        this.commentLists = comments
      },
      error => {
        console.log(error);
        this.errorMessage = <any>error
      }
    );
  }

  next(){
    this.counter++;
    if(this.counter>100){
      this.counter = 100;
      alert('There is No Post More');
    }
    this.comments();
  }

  previous(){
    this.counter--;
    if(this.counter<1){
      this.counter = 1;
      alert('There is No Previous Post');
    }
    this.comments();
  }

}
