import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  height: number; // 双方向データバインドする変数（身長）
  weight: number; // 双方向データバインドする変数（体重）

  // 本来だったらこういうのは Service class にするほうがいいんだろう。
  calcBmi(): number {
    if(isNaN(this.height) || isNaN(this.weight)) {
      return null;
    }

    let height_meter = this.height / 100;
    let bmi: number = this.weight / (height_meter ** 2);
    return bmi;
  }
}
