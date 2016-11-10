import * as React from "react";
import { Router, Route, browserHistory, IndexLink} from "react-router";
import { ListItemComponent } from "../../listItemComponent"

interface DashboardConfig {
  config: string;
  userSettings: string;
}

class DashboardApp extends React.Component<DashboardConfig, {}> {
  render() {
      let listItem = {listItem: {'done': false, 'description': 'Fuck it all !!!'}}
      let index = 0

      return (
        <div className="main clearfix">
          <div id="dash-tab-title" className="dash-tab-title">
            <ListItemComponent {...listItem} index={index} />
          </div>
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
