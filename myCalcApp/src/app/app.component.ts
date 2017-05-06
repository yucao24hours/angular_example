import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initValue: number; // 元本入力欄と双方向データバインドする変数
  rate: number; // 金利入力欄と双方向データバインドする変数

  calc(): number {
    // NaN（非数）かどうかを判定し、
    if(isNaN(this.initValue) || isNaN(this.rate)) {
      // 元本または利率が数字でない場合は null を返す
      return null;
    }

    let answer: number = this.initValue;
    for (let i = 0; i < 10; i++) {
      // 金利計算を10回繰り返して複利計算をする
      answer = answer * (1 + this.rate / 100);
    }
    return Math.floor(answer); // 計算結果を整数に変換して返す
  }

  // 年ごとの金額明細
  calcArray(): number[] {
    if (isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }
    let answer: number = this.initValue;
    let ret: number[] = [answer];
    for (let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate / 100);
      ret.push(Math.floor(answer));
    }
    return ret;
  }
}
