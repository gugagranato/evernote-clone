import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';


class SidebarComponent extends Component {
constructor() {
    super();
}
  render() {
    return (
    
    <div>Hello From sidebar</div>
    );
  }
}

export default withStyles(styles)(SidebarComponent);