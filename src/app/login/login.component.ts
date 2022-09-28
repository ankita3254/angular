import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup,FormControl ,FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UserdataService } from '../data/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
    public loginForm!:FormGroup
  constructor(public dialog: MatDialog,private shared:UserdataService,private formBuilder:FormBuilder,private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
     username:[''],
     password:['']
    })
  }



  onSubmit(data1:any){
    this.shared.update(data1).subscribe((result)=>{
      console.log(result);
    }
    )
  }
 
   name:any;
   show:any;
  check(){
    this.httpClient.get<any>("assets/my.json").subscribe(res=>{
      res.find((a:any)=>{
        this.show =  a.username===this.loginForm.value.username && a.password=== this.loginForm.value.password
        console.log(this.show)
        return this.show;
      });
      this.loginForm.reset();
      // console.log(this.show)
      if(this.show){
        this.router.navigate(['about']);
      }
      else{
        this.dialog.open(DialogComponent,{
          data:"right click",
          width:'250px',
          
        })
      }

    })
  }
}
