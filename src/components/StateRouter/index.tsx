import { Component, Match, Switch } from "solid-js";
import ExamplePage from "../../pages/examplePage";
import { useStores } from "../StoreProvider";

const StateRouter: Component = () => {
  const { stateStore } = useStores();

  return (
    <Switch>
      <Match when={stateStore.state === "initial"}>
        <ExamplePage />
      </Match>
    </Switch>
  );
};

export default StateRouter;
