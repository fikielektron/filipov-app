import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KukService } from '../services/kuk.service';

@Component({
  selector: 'app-penis',
  templateUrl: './penis.component.html',
  styleUrls: ['./penis.component.css'],
})
export class PenisComponent implements OnInit {
  public nekaPromenljiva = false;
  public pw = '';
  public user = '';
  public korisnici: User[] = [];
  constructor(private http: HttpClient, public kuk: KukService) {}

  ngOnInit(): void {
    // this.nekaPromenljiva = document.getElementById('content');
    this.pipniMeTuk();
    console.log(this.kuk);

  }

  selectUser(user: User){
    this.kuk.ballOwner = user;
  }

  pipniMeTuk() {
    // console.log({
    //   pw: this.pw,
    //   user: this.user
    // });

    this.http
      .get<User[]>('https://interview-mock.herokuapp.com/api/workers')
      .subscribe((korisnicOdBekenda) => {
        this.korisnici = korisnicOdBekenda;
        console.log(this.korisnici);
      });
  }
}

export interface User {
  id: number;
  name: string;
}
