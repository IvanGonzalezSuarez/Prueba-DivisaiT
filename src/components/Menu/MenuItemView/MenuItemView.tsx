import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../../types/types";
import { classNames } from "../../../util/classes";
import "./MenuItemView.scss";

interface MenuItemViewProps {
  item: MenuItem;
  isOpen: boolean;
}

export default function MenuItemView({ item, isOpen }: MenuItemViewProps) {
  return (
    <div className="MenuItemView">
      <Link to={item.url}>
        <div className={classNames("ItemContent", isOpen ? "" : "collapsed")}>
          <div className="icon">
            <item.icon size="32" />
          </div>
          <span className="label">{item.label}</span>
        </div>
      </Link>
      {!isOpen ? <div className="tooltip"> {item.label}</div> : ""}
    </div>
  );
}
