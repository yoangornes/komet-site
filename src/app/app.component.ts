import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site-komet';

  onClickMenu (left: number){
    const components = document.getElementById("components");
    components?.setAttribute("style", "left: "+left+"vw;");
  }
}
