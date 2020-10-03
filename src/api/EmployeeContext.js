import React from "react";
// default context object with properties corresponding to Provider values

const EmployeeContext = React.createContext({
  display: false,
  msg: "default value",
  theme: "",
  onClick: () => undefined
});

export default EmployeeContext;