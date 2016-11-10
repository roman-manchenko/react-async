///<reference path="../typings/index.d.ts"/>

export interface Action<T> {
  readonly type: string
  readonly payload: T
}

interface ActionCreator<T> {
  readonly type: string
  (payload: T): Action<T>
}

const actionCreator = <T>(type: string): ActionCreator<T> =>
    Object.assign((payload: T):any => ({type, payload}), {type})

export const isType = <T>(action: Action<any>, actionCreator: ActionCreator<T>): action is Action<T> =>
    action.type === actionCreator.type

//Example action creator:
export interface ListItem {
  readonly done: boolean
  readonly description: string
}

export const createListItemAction = actionCreator<ListItem>('CREATE_LIST_ITEM_ACTION_TYPE')
