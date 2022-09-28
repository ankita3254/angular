import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../data/userdata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message!: string;
  message1!: string;
  message2!: string;
  message3:any={};
  so!: any;
  constructor(public shared:UserdataService) { }

  ngOnInit() :void{
    //this.message=this.shared.getMessage()
    // setInterval(() => {
      // this.message=this.shared.getMessage()
      // this.message1=this.shared.getMessage1()
      // this.message2=this.shared.getMessage2() 
    //  },20)
    
    this.message =this.shared.getmessage();
    this.message3=this.shared.getdata();
    //console.log(this.message3);
  }
  
    //this.so=this.shared.getdata()
  
}
