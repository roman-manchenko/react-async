import * as React from "react";
import { Router, Route, browserHistory, IndexLink} from "react-router";
import { ListItemComponent } from "../../listItemComponent"
import { dispatch } from "../../store"
import { createListItemAction, ListItem } from "../../redux-actions"

interface DashboardConfig {
  config: string;
  userSettings: string;
}

class DashboardApp extends React.Component<any, any> {
  renderItems() {

  }

  render() {
      return (
        <div className="main clearfix">
          <div id="dash-tab-title" className="dash-tab-title">
            {this.state && this.state.listItems && this.state.listItems.map(function (listItem: ListItem, index: number) {
              <ListItemComponent {...listItem} index={index} />
            })
            }
          </div>
          <button onClick={() => (dispatch(createListItemAction({done: false, description: 'fuck it twice!'})))}>Create</button>
          <div id="subtabs-menu" className="sub-tabs">
            <ul>
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><IndexLink to="/goodies" activeClassName="active">Goodies</IndexLink></li>
            </ul>
          </div>
          <div id="tab-data" className="tab-data">
          {this.props.children}
          </div>
        </div>
      )
  }
}
export default DashboardApp
