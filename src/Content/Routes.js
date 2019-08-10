import React from "react";
import { Route } from "react-router-dom";
//ROUTES
import Dashboard from "./Dashboard/Dashboard";
import Products from "./Products/Products";
import Users from "./Users/Users";
import Orders from "./Orders/Orders";
export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Dashboard} />
      <Route path="/products" component={Products} />
      <Route path="/users" component={Users} />
      <Route path="/orders" component={Orders} />
    </>
  );
}
