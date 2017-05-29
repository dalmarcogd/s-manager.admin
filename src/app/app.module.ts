import { AppLoaderService } from './app.loader.service';
import { ServiceLocator } from './service/locator/service.locator';
import { Injector } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CoreModule } from './core/core.module';
import { ServiceModule } from './service/service.module';

@NgModule({
  imports: [
    CoreModule.forRoot(),
    ServiceModule.forRoot(),
    routing
  ],
  providers: [AppLoaderService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(injector: Injector) {
    ServiceLocator.setInjector(injector);
  }
 }
