import { Injectable } from "@angular/core";

@Injectable()
export class BmiService {
  calcBmi(height: number, weight: number): number {
    if(isNaN(height) || isNaN(weight)) {
      return null;
    }

    let height_meter = height / 100;
    let bmi = weight / (height_meter ** 2);
    return bmi;
  }
}
