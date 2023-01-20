import { useStores } from "../StoreProvider";
import styles from "./ExampleComponent.module.css";

type Props = {
  showAuthor: boolean;
};

const ExampleComponent = ({ showAuthor }: Props) => {
  const { exampleStore } = useStores();

  exampleStore.getNewQuote();

  return (
    <div class={styles["example-component"]}>
      <div class={styles["quote"]}>{exampleStore.quote}</div>
      {showAuthor && <div class={styles["author"]}>{exampleStore.author}</div>}
      <div>{exampleStore.count}</div>
    </div>
  );
};

export default ExampleComponent;
