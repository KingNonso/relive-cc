import RouteHeader from "./component/RouteHeader";
import Route from "./component/Route";
import "./style.css";

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
    myPosition: 0,
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
