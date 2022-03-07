import { useState } from "react";
import { MenuCard, MenuItem } from "../../types/types";
import { classNames } from "../../util/classes";
import { VscMenu } from "react-icons/vsc";
import MenuCardView from "./MenuCardView/MenuCardView";
import MenuItemView from "./MenuItemView/MenuItemView";

import "./Menu.scss";

export interface MenuProps {
  items: MenuItem[];
  card: MenuCard;
}

export function Menu({ items, card }: MenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classNames("Menu", isOpen ? "expanded" : "collapsed")}>
      <div className="menuButton">
        <button className="hamburguerIcon" onClick={handleClick}>
          <VscMenu />
        </button>
      </div>
      <MenuCardView card={card} isOpen={isOpen} />
      {items.map((item) => (
        <MenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}
    </div>
  );
}
