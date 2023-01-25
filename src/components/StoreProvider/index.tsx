import { createContext, JSX, ParentComponent, useContext } from 'solid-js';

import RootStore, { createRootStore } from '../../stores/RootStore';

const store = createRootStore();

const StoreContext = createContext<RootStore>(store);

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
