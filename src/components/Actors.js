import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1> Actors Page </h1>
      {actors.map(actor=>{
         return <div class='actor' key={actor.name}>{actor.name}{actor.movies}</div>
      })
    }
    </div>
  );
};

export default Actors;
