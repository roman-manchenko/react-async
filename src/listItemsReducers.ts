import { ListItem, createListItemAction, Action, isType } from './listItemsActions'
import Immutable = require('immutable')

type ListItems = Immutable.List<ListItem>

export interface ListItemsState {
  readonly listItems: ListItems
}

export const listItemsReducers = (state: ListItems = Immutable.List<ListItem>(), action: Action<any>): ListItems => {

  if (isType(action, createListItemAction)) {
    const listItem = {
      done: action.payload.done,
      description: action.payload.description
    }
    return state.push(listItem)
  }

  return state
}
