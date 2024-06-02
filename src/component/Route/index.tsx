import React, { useState } from "react";
import Person from "../Person";
import "./styles.css";

interface PersonProps {
  name: string;
  position: number;
}

interface RouteProps {
  peopleOnRoute: PersonProps[];
  myPosition: number;
}

const Route: React.FC<RouteProps> = ({ peopleOnRoute, myPosition }) => {
  return (
    <>
      <div className="route-map">
        <div className="container">
          <div className="route-start">0%</div>
          <div className="routes">
            <Person key="you" position={myPosition} className="my-position" />
            {peopleOnRoute.map((runner) => (
              <Person
                key={runner.name}
                name={runner.name}
                position={runner.position}
              />
            ))}
          </div>
          <div className="route-end">100%</div>
        </div>
      </div>
    </>
  );
};

export default Route;
