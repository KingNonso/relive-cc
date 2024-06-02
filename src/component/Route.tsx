import React, { useState } from "react";
import Person from "./Person";

interface PersonProps {
  name: string;
  position: number;
}

interface RouteProps {
  peopleOnRoute: PersonProps[];
  myPosition: number;
}

const Route: React.FC<RouteProps> = ({ peopleOnRoute, myPosition }) => {
  const travel: string[] = Array(100).fill("*");
  const [people, setPeople] = useState<PersonProps[]>(peopleOnRoute);
  const [myPositionState, setMyPosition] = useState(myPosition);

  return (
    <>
      <div className="route-map">
        0%
        {travel.map((_, index) => (
          <span key={index} className="route">
            {myPosition && myPosition * 100 === index ? (
              <Person key="you" />
            ) : null}
            {people &&
              people.map((runner) =>
                runner.position * 100 === index ? (
                  <Person key={runner.name} name={runner.name} />
                ) : null
              )}
          </span>
        ))}
        100%
      </div>
    </>
  );
};

export default Route;
