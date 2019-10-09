import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    name :'Arslan Wazir',
    city :'Rawalpindi',
    interest :['Ethical Hacking ','Surfing Internet ']
  };

  constructor() {}

}
