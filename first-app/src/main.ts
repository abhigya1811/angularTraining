import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
// node modules are not importing by prefixing a . or ..
/*platformBrowserDynamic:
angular was initially only meant to be used in the browser
react  split their library into- react core engine and react dome
similarly angular library was split into two parts : angular core --> nothing to do with the browser.
and you have an adapter that makes angular core interact with the browser . this adapter is called platformBrowserDynamic
*/
import { AppModule } from './app/app.module'; // if you are importing your own modules, it starts with a . or a ..
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
