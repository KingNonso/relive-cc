import React from "react";

interface PersonProps {
  name?: string;
}

const Person: React.FC<PersonProps> = ({ name = "You" }) => {
  return (
    <>
      <span className={name === "You" ? "person-you" : "person"}>{name}</span>
    </>
  );
};

export default Person;
