import React from "react";
import styles from './Home.module.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="flex-1">Home Page</div>
    )
  }
}
