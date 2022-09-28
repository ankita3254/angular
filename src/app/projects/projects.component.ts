import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../data/userdata.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   show:any;
  constructor(private call:UserdataService) { }
   
  ngOnInit(): void { 
    
  }
  on(){
    this.call.code().subscribe(data=>{
      this.show=data;
      //console.log(data)
    })
  }

}
