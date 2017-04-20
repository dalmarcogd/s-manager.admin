import {Headers} from "@angular/http";
/**
 * Created by Guilherme on 07/04/2017.
 */

export class HttpHeaders extends Headers {

  constructor() {
    super();
    this.append("Content-Type", "application/json");
    this.append("Accept", "application/json");
    //let token: any = authService.getAuth().token;
    //if (!!token && !String.isNullOrWhiteSpace(token.value)) {
    //this.append(configHelper.getAppConfig().auth.token, token.value);
    //}
  }
}
