import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <GoogleOAuthProvider clientId="439785287012-842pb2i9a2vlggl43lia212i0c4rij9n.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
