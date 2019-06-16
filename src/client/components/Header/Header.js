import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Header.css';

const Header = ({
  children,
}) => {
  return (
    <header className={styles.root}>
      <div className="container">
        <div className={classnames('d-flex', 'ai-c', 'jc-sb', styles.inner)}>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
