import React, { useEffect, useState } from "react";
import Person from "../Person";
import "./styles.css";

interface PersonProps {
  name: string;
  position: number;
}

interface RouteProps {
  peopleOnRoute: PersonProps[];
  myPosition: number;
  onPositionChange: (newPosition: number) => void;
}

const Route: React.FC<RouteProps> = ({
  peopleOnRoute,
  myPosition,
  onPositionChange,
}) => {
  const [people, setPeople] = useState<PersonProps[]>(peopleOnRoute);
  const [myPos, setMyPos] = useState<number>(myPosition);

  useEffect(() => {
    const interval = setInterval(() => {
      setPeople((prevPeople) => {
        return prevPeople.map((person) => {
          let newPosition = person.position + 0.01;
          if (newPosition > 1) newPosition = 1;
          return { ...person, position: newPosition };
        });
      });

      setMyPos((prevPos) => {
        let newPosition = prevPos + 0.01;
        if (newPosition > 1) newPosition = 1;
        onPositionChange(newPosition);
        return newPosition;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onPositionChange]);

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
