import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../data/userdata.service';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
   name:any;
  constructor(private shared:UserdataService) { }

  ngOnInit(): void {
  }
  
  open(){
    this.shared.setMessage(true);
  }
  open2()
  {
    this.shared.setMessage(false);
  }
}
