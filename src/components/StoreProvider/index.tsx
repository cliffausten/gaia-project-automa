import { Context, createContext, JSX, useContext } from 'solid-js';

import RootStore, { createRootStore } from '../../stores/RootStore';

let store: RootStore;

let StoreContext: Context<RootStore>;

export const setupStores = (rootStore?: RootStore) => {
  if (rootStore) store = rootStore;
  else store = createRootStore();

  StoreContext = createContext<RootStore>(store);
};

export const useStores = () => useContext(StoreContext)!;

type Props = {
  children: JSX.Element;
};

export const StoreProvider = ({ children }: Props) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
