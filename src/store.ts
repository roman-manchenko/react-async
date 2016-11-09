import { createStore, combineReducers, Unsubscribe } from 'redux'
import { Action } from './listItemsActions'
import { listItemsReducers, ListItemsState } from './listItemsReducers'
// import { someOtherReducers, SomeOthersState } from 'someOtherReducers'

const reducer = combineReducers({
  listItems: listItemsReducers,
  // someOther: someOtherReducers
})
export interface State extends ListItemsState/*, SomeOtherState*/ {}

let store = createStore(reducer)

export const getState = () => store.getState() as State
export const dispatch = (a:Action<any>) => store.dispatch(a)
export const subscribeToState = (callback: () => void) => store.subscribe(callback)
