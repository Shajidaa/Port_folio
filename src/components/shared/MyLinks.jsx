import React from "react";
import { NavLink } from "react-router";

const MyLinks = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={`${className} { isActive })=>
          isActive
            ? "text-purple-500 font-semibold"
            : "text-gray-600"`}
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
