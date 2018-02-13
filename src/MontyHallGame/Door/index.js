import React, { Component } from 'react';
import s from './Door.css';

class Door extends Component {
  constructor(props) {
      super(props);
      this.state = {
        revealed: false
      }
  }

  get_classes = () => {
    let styles = [s.door];
    const winner   = this.props.winning,
          selected = this.props.selected,
          opened   = this.props.opened;

    if (opened) {
      winner ? styles.push(s.treasure) : styles.push(s.goat)
    }

    if (selected) { styles.push(s.selected); }

    return styles.join(' ');
  }

  render() {
    return (
      <div className={s.wrapper} onClick={() => this.props.onClick(this.props.number)}>
        <div className={this.get_classes()}>
        </div>
      </div>
    )
  }
}

export default Door;
