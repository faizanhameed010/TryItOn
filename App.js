import React from "react";
import RootNavigator from "./RootNavigator";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
