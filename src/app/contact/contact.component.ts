import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   user:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.user=this.route.snapshot.paramMap.get('id');
  }

}
