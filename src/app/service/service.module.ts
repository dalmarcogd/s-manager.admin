import {NgModule, ErrorHandler, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuard} from './auth/auth.guard';
import {AuthService} from './auth/auth.service';
import { ApplicationErrorHandler } from './error/application.error.handler';
import {TokenService} from './token/token.service';
import {HttpService} from './http/http.service';

/**
 * Created by Guilherme on 06/04/2017.
 */
const PROVIDERS = [ AuthGuard,
                    AuthService,
                    TokenService,
                    HttpService,
                    ApplicationErrorHandler,
                    {provide: ErrorHandler, useClass: ApplicationErrorHandler}
                  ];

@NgModule({
  imports:      [ CommonModule ],
  providers:    [ PROVIDERS ]
})
export class ServiceModule {
   static forRoot(): ModuleWithProviders {
        return {
            ngModule:  ServiceModule ,
            providers: [PROVIDERS]
        };
    }
}
