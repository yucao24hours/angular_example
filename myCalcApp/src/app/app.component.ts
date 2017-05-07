import { Component } from '@angular/core';
import { BmiService } from './bmi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  height: number; // 双方向データバインドする変数（身長）
  weight: number; // 双方向データバインドする変数（体重）

  constructor(private bmiService: BmiService){}

  save(): void {
    localStorage.setItem(
      "height", this.height.toString());
    localStorage.setItem(
      "weight", this.weight.toString());
  }

  clear(): void {
    localStorage.setItem("height", "0");
    localStorage.setItem("weight", "0");
    this.height = 0;
    this.weight = 0;
  }

  ngOnInit() {
    if (localStorage.getItem("height")) {
      this.height = Number(localStorage.getItem("height"));
      this.weight = Number(localStorage.getItem("weight"));
    }
    else
    {
      this.clear();
    }
  }
}
