import PropTypes from 'prop-types';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <main className={styles.main}>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
