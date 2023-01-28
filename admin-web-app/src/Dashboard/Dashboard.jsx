import { Component } from 'react';
import { Outlet } from 'react-router';

import styles from './Dashboard.module.scss';
import MenuItem from './MenuItem';

import plusSvg from './plus-lg.svg';
import easel from './easel.svg';
import search from './search.svg';
import link from './link-45deg.svg';
import home from './house-fill.svg';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (<>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <div className={styles.line}></div>
          <h1 className={styles.title}>Dashboard</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.menu}>
          <MenuItem index={true} title="home" to="/admin/home" icon={home} />
          <MenuItem title="attendance" to="/admin/attendance" icon={easel} />
          <MenuItem title="add customer" to="/admin/addCustomer" icon={plusSvg} />
          <MenuItem title="find customer" to="/admin/findCustomer" icon={search} />
          <MenuItem title="update customer" to="/admin/updateCustomer" icon={link} />
        </div>
      </div>
      <Outlet />
    </>)
  }
}
