import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imput',
  templateUrl: './imput.component.html',
  styleUrls: ['./imput.component.css']
})
export class ImputComponent {

  @Input()
  slogen:string;
}
