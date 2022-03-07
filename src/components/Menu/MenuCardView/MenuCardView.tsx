import { useNavigate } from "react-router-dom";
import { MenuCard } from "../../../types/types";
import { classNames } from "../../../util/classes";
import "./MenuCardView.scss";

interface MenuCardViewProps {
  card: MenuCard;
  isOpen: boolean;
}

export default function MenuCardView({ card, isOpen }: MenuCardViewProps) {
  const navigate = useNavigate();

  const handleclick = ()=>{
    navigate("/");
  }

  return (
    <div className="MenuCardView">
      <img
        className="profile"
        src={card.imgUrl}
        alt={card.id}
        width="100%"
        onClick={handleclick}
      />
      <div className={classNames("profileInfo", isOpen ? "" : "collapsed")}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
      </div>
    </div>
  );
}
