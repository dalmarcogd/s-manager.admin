import {AppTask} from '../../core/task/app.task';
import {AppActionType, AppActionTask} from '../../core/task/action/app.action.task';
import {AppActionTaskFactory} from '../../core/task/action/app.action.task.factory';

export abstract class BaseComponent {

  constructor(private appTask: AppTask, private appActionTaskFactory: AppActionTaskFactory) {}

  protected createAction(type: AppActionType) : AppActionTask {
    return this.appActionTaskFactory.create(type);
  }
}
