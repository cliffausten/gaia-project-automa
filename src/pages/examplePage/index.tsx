import { Component } from "solid-js";
import ExampleComponent from "../../components/ExampleComponent";

import styles from "./ExamplePage.module.css";

const ExamplePage: Component = () => {
  return (
    <div class={styles["example-page-grid"]}>
      <ExampleComponent showAuthor={true} />
    </div>
  );
};

export default ExamplePage;
