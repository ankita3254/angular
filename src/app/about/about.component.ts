import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../data/userdata.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private shared:UserdataService) {
    console.warn('about loaded');
   }
   
  ngOnInit(): void {
  }

  onSub(data1:any){
    this.shared.del(data1).subscribe((result)=>{
      console.log(result);
    }
    )
    console.log(data1)
  }

}
