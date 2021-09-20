import React from "react";
import { LoginForm } from "./Component/LoginForm/LoginForm";
import { Home } from "./Component/HomePage/Home";
import { Todo } from "./Component/Todo/Todo";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/todo" component={Todo} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
