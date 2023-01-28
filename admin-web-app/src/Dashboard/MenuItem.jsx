import { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from './MenuItem.module.scss';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <NavLink
        exact="true"
        to={this.props.to}
        className={({ isActive }) => isActive ?
          [styles.active, styles.menuItem].join(' ') : styles.menuItem}>
        <div className={styles.icon}>
          <img src={this.props.icon} alt="" />
        </div>
        <div className={styles.title}>{this.props.title}</div>
      </NavLink>
    )
  }
}
