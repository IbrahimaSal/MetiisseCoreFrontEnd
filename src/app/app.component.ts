import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MetiisseCoreFrontEnd';
  lastUpdate = new Promise<Date>(
    (resolve, reject) => {
      const date= new Date();
      setTimeout(() =>{
        resolve(date);
      }, 1000);
    }
  );
}
