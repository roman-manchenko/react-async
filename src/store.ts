import { createStore, combineReducers, Unsubscribe } from 'redux'
import { Action, ListItem } from './redux-actions'
import { listItemsReducers, ListItemsState } from './reducers'

const reducer = combineReducers({
  listItems: listItemsReducers,
})
export interface State extends ListItemsState {}

let preLoad = {'listItems': [{done: false, description: 'Fuck it all!!!'}]}

let store = createStore(reducer, preLoad)

export const getState = () => store.getState() as State
export const dispatch = (a:Action<any>) => store.dispatch(a)
export const subscribeToState = (callback: () => void) => store.subscribe(callback)
