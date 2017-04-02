import {Component} from '@angular/core';
import { InstaService } from './service/insta.service';

@Component({
  selector: 'home',
  styleUrls: ['./insta.component.css'],
  templateUrl: './insta.component.html'
})
export class InstaComponent {
  private urlVariable:string;
constructor(private instaService: InstaService) {
  }

searchForPP(name: string) {
    this.instaService.getInstaPPLink(name)
      .subscribe(({link}) => {
		this.urlVariable = link;
      });
  }
}
