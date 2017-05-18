import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AppActionTask} from './action/app.action.task';
import {AppState} from '../state/app.state';

@Injectable()
export class AppTask {

  private source: Subject<AppActionTask>;

  constructor(private appState: AppState) {
    this.source = new Subject<AppActionTask>();
    this.source.subscribe((appAction: AppActionTask) => this.appState.change(appAction));
    this.source.subscribe((appAction: AppActionTask) => {
      appAction.makeAfter();
      appAction.makeExecute();
      appAction.makeExecute();
    });
  }

  run(appAction: AppActionTask) {
    this.source.next(appAction);
  }
}
