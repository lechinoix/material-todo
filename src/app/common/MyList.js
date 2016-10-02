import React from 'react';
import _ from 'lodash';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

class MyList extends React.Component {
  render() {
    return (
      <div>
        <List>
          {_.map(this.props.todoItems, function(item) {
            return (
              <div>
                <ListItem primaryText={item} />
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    );
  }
}

MyList.displayName = 'myList';
MyList.propTypes = {
  'todoItems': React.PropTypes.array.isRequired,
};

module.exports = MyList;
