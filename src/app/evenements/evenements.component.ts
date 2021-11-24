import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onScroll(event: any): void{
    console.log(event);

    if ((event.target.id === "evtav") || (event.target.id === "evtsav")) {
      const evts = document.getElementById("evtsavlist");
      if (event.deltaY>0) {
        evts?.scrollBy(100,0);
      } else {
        evts?.scrollBy(-100,0)
      }
    } else {

    }
  }
}
