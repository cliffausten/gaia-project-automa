import { Component } from 'solid-js';
import CurrentCardComponent from '../../components/CurrentCardComponent';

import styles from './ExamplePage.module.css';

const ExamplePage: Component = () => {
  return (
    <div class={styles['example-page-grid']}>
      <CurrentCardComponent />
    </div>
  );
};

export default ExamplePage;
