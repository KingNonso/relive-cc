import React from "react";
import logo from "./logo.svg";
import "./style.css";
import RouteHeader from "./component/RouteHeader";
import Route from "./component/Route";

interface PersonProps {
  name: string;
  position: number;
}

interface DataProps {
  routeName: string;
  myPosition: number;
  peopleOnRoute: PersonProps[];
}

function App() {
  const data: DataProps = {
    routeName: "To the dunes and back",
    myPosition: 1,
    peopleOnRoute: [
      {
        name: "Lex",
        position: 0.4,
      },
      {
        name: "Frikkie",
        position: 0.25,
      },
      {
        name: "Ronald",
        position: 0.75,
      },
    ],
  };

  return (
    <div className="relive-container">
      <RouteHeader routeName={data.routeName} completion={data.myPosition} />
      <Route {...data} />
    </div>
  );
}

export default App;
