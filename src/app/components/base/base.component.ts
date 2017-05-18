import { ServiceLocator } from './../../service/locator/service.locator';
import {AppTask} from '../../core/task/app.task';
import {AppActionType, AppActionTask} from '../../core/task/action/app.action.task';
import {AppActionTaskFactory} from '../../core/task/action/app.action.task.factory';

export abstract class BaseComponent {

  private appTask: AppTask = ServiceLocator.get(AppTask);
  private appActionTaskFactory: AppActionTaskFactory = ServiceLocator.get(AppActionTaskFactory);

  protected createAction(type: AppActionType) : AppActionTask {
    return this.appActionTaskFactory.create(type);
  }
}
