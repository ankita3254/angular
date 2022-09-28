import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { UserdataService } from '../data/userdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myControl = new FormControl('');
  options: string[] = ['Ankita', 'Nisha', 'Anamika','suman','Anita','Anjali'];
  
  newRequest:any={
    
  };
  constructor(public dialog: MatDialog,private shared : UserdataService) { }
  opendialog(){
     this.shared.setMessage1(this.newRequest);
    this.dialog.open(DialogExampleComponent,{
      data:"right click",
      width:'250px',
      
    })}
     show:any;
  onSubmit(data1:any){
    this.shared.save(data1).subscribe((result)=>{
      console.log(result);
    }
    )
  }
  


}