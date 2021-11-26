import { Component, OnInit } from '@angular/core';
import { KukService } from 'src/app/services/kuk.service';

@Component({
  selector: 'app-levo-jaje',
  templateUrl: './levo-jaje.component.html',
  styleUrls: ['./levo-jaje.component.css']
})
export class LevoJajeComponent implements OnInit {

  constructor(public kuk: KukService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.kuk.ballOwner = { id: -1, name:"Uhakovo nas neki gospodin"}
    }, 2500)
  }

}
