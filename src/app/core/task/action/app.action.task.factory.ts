import {AppActionType, AppActionTask, AppAction} from './app.action.task';
import {Injectable} from '@angular/core';

@Injectable()
export class AppActionTaskFactory {

  create(type: AppActionType) : AppActionTask {
    return new AppActionTask(type);
  }
}
