import { getState, State, subscribeToState } from './store';
import { Component } from 'react';

const hijackComponentWillUnmount = (component: any, callback: () => void) => {
  const componentWillUnmount = component.componentWillUnmount
  component.componentWillUnmount = () => {
    callback()
    if (componentWillUnmount) {
      componentWillUnmount.apply(component);
    }
  }
}
export const stateConnector = <T>(mapState: (s:State) => T, component: Component<any, T>) => {
  let oldState = mapState(getState())
  let wasUnsubscribed = false

  const unsubscribe = subscribeToState(() => {
    if (wasUnsubscribed) {
      return;
    }
    const newState = mapState(getState())
    if (oldState !== newState) {
      component.setState(newState)
    }

    oldState = newState
  });

  hijackComponentWillUnmount(component, () => {
    wasUnsubscribed = true
    unsubscribe()
  })

  component.state = oldState
}
