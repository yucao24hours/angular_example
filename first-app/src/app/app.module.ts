import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// AppComponent クラスを、src/app/app.component.ts からインポート
import { AppComponent } from './app.component';

@NgModule({
  // このアプリで利用するクラス
  declarations: [
    AppComponent
  ],
  // このアプリで利用するモジュール
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // DI 元となるクラス
  providers: [],
  // 最初に起動するコンポーネント
  bootstrap: [AppComponent]
})
export class AppModule { }
