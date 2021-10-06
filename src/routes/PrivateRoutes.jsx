import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoutes = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("tokenUser")?.length > 0) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: "/login" }} />;
        }
      }}
    />
  );
};

export default PrivateRoutes;
