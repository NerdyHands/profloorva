import React from "react";
import { Navbar7 } from "./Navbar7";
import { Footer4 } from "./Footer4";

export function PageLayout({ children }) {
  return (
    <div>
      <Navbar7 />
      <main>{children}</main>
      <Footer4 />
    </div>
  );
}
