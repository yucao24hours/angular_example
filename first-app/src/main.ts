import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// AppModule は、src/app/app.module を参照する
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 実行モードが開発モードか運用モードか判定
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
