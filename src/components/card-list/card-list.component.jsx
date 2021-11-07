import  React from "react";

import { Card } from "../card/card-component";
import './card-list.styles.css';

export const CardList = probs => {

    console.log(probs);

    return <div className = 'card-list'>
    {probs.monsters.map(monster=>(
      <Card key={monster.id} monster = {monster}/>
    ))}
    </div>
};