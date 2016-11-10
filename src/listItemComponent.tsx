import * as React from 'react';
import { stateConnector } from './stateConnector';
import { ListItem } from './redux-actions';

interface ComponentProps {
  readonly index: number
}

interface ComponentState {
    readonly listItem: ListItem
}

export class ListItemComponent extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props)
        stateConnector(
          (function (state: any) {
            return {'listItem': state.listItems[this.props.index]};
          }).bind(this), this)
    }

    render() {
      const doneClass = this.state.listItem.done ? 'done' : ''

      return <li className={doneClass}>{this.state.listItem.description}</li>
    }
}
