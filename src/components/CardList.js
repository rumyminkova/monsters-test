import React from "react";
import "./card-list.styles.css";
import CardMonster from "./CardMonster";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <CardMonster monster={monster} key={monster.id} />
      ))}
    </div>
  );
};
export default CardList;
