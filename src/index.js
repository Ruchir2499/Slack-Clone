import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import firebase from "./firebase";
import history from "./history";
import Spinner from "./Spinner";

import { Provider, connect } from "react-redux";
import { createStore, compose } from "redux";
import "semantic-ui-css/semantic.min.css";
import { Router, Switch, Route } from "react-router-dom";

import rootReducer from "./reducers";
import { setUser, clearUser } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

class Root extends React.Component {
  componentDidMount() {
    console.log(this.props.isLoading);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //console.log(user);
        this.props.setUser(user);
        history.push("/");
      } else {
        history.push("/login");
        this.props.clearUser(); // this is a action that clears our user
      }
    });
  }
  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({ isLoading: state.user.isLoading });

const RootWithConnect = connect(mapStateToProps, { setUser, clearUser })(Root);

ReactDOM.render(
  <Provider store={store}>
    <RootWithConnect />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
