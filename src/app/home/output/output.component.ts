import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output()
  public report = new EventEmitter<string>();
  
reportHigh() {
 this.report.emit("High");
}
reportMedium() {
  this.report.emit("Medium");
}
reportLow() {
 this.report.emit("Low");
}

}
