import * as React from 'react'
import { stateConnector } from './stateConnector';
import { ListItem } from './listItemsActions';

interface ComponentProps {
  readonly index: number
}

interface ComponentState {
    readonly listItem: ListItem
}

export class ListItemComponent extends React.Component<ComponentProps, ComponentState> {
    constructor(props: any) { //FIX any
        super(props)
        stateConnector((state: any) => ({listItem: state.listItems[this.props.index]}), this)
    }

    render() {
      const doneClass = this.state.listItem.done ? 'done' : ''

      return <li className={doneClass}>{this.state.listItem.description}</li>
    }
}
