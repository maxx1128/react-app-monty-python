import React, { Component } from 'react';
import s from './Button.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
   }

  render() {
    let styleClass;

    let text = (this.props.text ? this.props.text : 'Button');
    let link = (this.props.link ? this.props.link : 'javascript:void(0);');

    if (this.props.secondary) {
      styleClass = s.secondary
    } else {
      styleClass = s.default
    }

    return (
      <a class={styleClass} href={link}>
        {text}
      </a>
    )
  }
}

export default Footer;
