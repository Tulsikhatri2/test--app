"use client";

import { Provider } from "react-redux";
import { store } from "../Redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/es/integration/react";

let persistor = persistStore(store);

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
}
