import React from "react";
import { Menu } from "../Menu/Menu";
import { items, card } from "../../mocks/menu";
import "./Layout.scss";

const Layout = ({ children }: any) => {
  return (
    <div className="Layout">
      <div className="left">
        <Menu items={items} card={card} />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
