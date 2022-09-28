import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  message!: string;
  message1!:string;
  message2!:string;
  message3!:string;
  url ='http://localhost:3000/';
  constructor(private http:HttpClient) { }
  
  code(){
    
    return this.http.get(this.url);
  }
  save(data:any){
    
    return this.http.post(this.url,data);
    //console.log(data);
  }
  update(data:any){
    
    return this.http.put(this.url,data);
    //console.log(data);
  }
  del(data2:any){
    
    return this.http.delete('http://localhost:3000/'+`${data2.id}`);
    //console.log(data);
  }
  setMessage(data:any){
    this.message=data
  }
  
  getmessage(){
    return this.message;
  }
    //console.log(this.message)
  // }
  
  setMessage1(hash:any){
    this.message3=hash;
    //console.log(hash)
  }
  getdata(){
    return this.message3;
  }
}
