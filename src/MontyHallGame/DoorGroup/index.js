import React, { Component } from 'react';

import Door from './../Door';

class DoorGroup extends Component {

  render() {
    return (
      <div>
        <p>
          Door Group!
        </p>

        <Door />
        <Door />
        <Door />
      </div>
    )
  }
}

export default DoorGroup;
