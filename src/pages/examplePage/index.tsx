import { Component } from 'solid-js';

import styles from './ExamplePage.module.css';
import DeckComponent from '../../components/DeckComponent';

const ExamplePage: Component = () => {
  return (
    <div class={styles['example-page-grid']}>
      <DeckComponent />
    </div>
  );
};

export default ExamplePage;
