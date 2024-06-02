import React from "react";
import "./styles.css";

interface PersonProps {
  name?: string;
  position: number;
  className?: string;
}

const Person: React.FC<PersonProps> = ({
  name = "You",
  position,
  className = "",
}) => {
  return (
    <div
      className={`person ${className}`}
      style={{
        left: `${position * 100}%`,
      }}
    >
      {name}
    </div>
  );
};

export default Person;
