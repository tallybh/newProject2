import { Component } from '@angular/core';
import { ColorsService } from 'src/app/colors.service';

@Component({
  selector: 'app-colorful',
  templateUrl: './colorful.component.html',
  styleUrls: ['./colorful.component.css']
})
export class ColorfulComponent {

  public styles = { backgroundColor: "" };
  constructor(color:ColorsService) {
    this.styles.backgroundColor = color.getRandomColor();
  }
}
