export enum AppActionType {
              READING = 0,
              CHANGING = 1,
              CREATING = 2,
              DELETING = 3,
              REDIRECTING = 4
            };

export class AppActionTask {
  private type: AppActionType;
  private before: AppAction;
  private execute: AppAction;
  private after: AppAction;

  constructor(type: AppActionType) {
    this.type = type;
  }

  getType() : AppActionType {
    return this.type;
  }

  _before(action: AppAction) : AppActionTask {
    this.execute = action;
    return this;
  }

  _execute(action: AppAction) : AppActionTask {
    this.execute = action;
    return this;
  }

  _after(action: AppAction) : AppActionTask {
    this.execute = action;
    return this;
  }

  makeBefore() : void {
    if (!!this.before) {
        this.before();
    }
  }

  makeExecute() : void {
    if (!!this.execute) {
      this.execute();
    }
  }

  makeAfter() : void {
    if (!!this.after) {
        this.after();
    }
  }
}

export interface AppAction {
  (): void;
}
