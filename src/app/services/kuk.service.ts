import { Injectable } from '@angular/core';
import { User } from '../penis/penis.component';

@Injectable({
  providedIn: 'root'
})
export class KukService {
  currentLeftLegAngle = 45; // stepeni
  currentRightLengAngle = 56; // stepeni

  ballsSticky: boolean = false;

  ballOwner: User | null = null;

  constructor() { }
}
