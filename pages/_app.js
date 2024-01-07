// import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
// import { persistStore } from "redux-persist";
import store from "../store/store";
// import Loading from "../components/Loading";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  // let persistor = persistStore(store);
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={<Loading />}> */}
      <Component {...pageProps} />
      {/* </PersistGate> */}
    </Provider>
  );
}
