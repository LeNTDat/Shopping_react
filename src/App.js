import React from "react";
import Allproducts from "./shopAdmin/client/Allproduct";
import NewPro from "./shopAdmin/shopAdmin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProDetail from "./shopAdmin/client/Product-detail";
import ShoppingCart from "./shopAdmin/client/shopping-cart";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Navbarclient from "./shopAdmin/client/NavbarClient";
import LoginUser from "./shopAdmin/login";

function App() {
  const intiState = {
    cart: [
      {
        name: "Product 2",
        id: "ebc",
        price: 20,
        quantity: 5,
        images: ["1", "2"],
        id_cart: 1,
      },
    ],
  };
  const root_reducer = function (state = intiState, action) {
    return state;
  };

  const store = createStore(
    root_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/products/details">
              <Navbarclient />
              <ProDetail />
            </Route>
            <Route path="/admin/login" component={LoginUser}></Route>
            <Route path="/admin" component={NewPro}></Route>
            <Route path="/products/:id">
              <Navbarclient />
              <ProDetail />
            </Route>
            <Route path="/products">
              <Navbarclient />
              <Allproducts />
            </Route>
            <Route path="/shopping-cart">
              <Navbarclient />
              <ShoppingCart />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
