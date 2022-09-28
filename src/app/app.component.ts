import { Component ,ViewContainerRef} from '@angular/core';
import { UserdataService } from './data/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  constructor(private viewcontainer:ViewContainerRef){}

  async loadadmin(){
    this.viewcontainer.clear();
    const {AboutComponent}=await import ('./about/about.component');
    this.viewcontainer.createComponent(AboutComponent);
  }
  }

