import RouteHeader from "./component/RouteHeader";
import Route from "./component/Route";
import "./style.css";
import { useEffect, useState } from "react";

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
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    const apiData: DataProps = {
      routeName: "To the dunes and back",
      myPosition: 0.25,
      peopleOnRoute: [
        {
          name: "Lex",
          position: 0.4,
        },
        {
          name: "Frikkie",
          position: 0.75,
        },
        {
          name: "Ronald",
          position: 0.5,
        },
      ],
    };

    setData(apiData);
  }, []);

  const handlePositionChange = (newPosition: number) => {
    setData((prevData) => {
      if (!prevData) return null;
      return { ...prevData, myPosition: newPosition };
    });
  };

  return (
    <div className="relive-container">
      {data ? (
        <>
          <RouteHeader
            routeName={data.routeName}
            completion={data.myPosition}
          />
          <Route {...data} onPositionChange={handlePositionChange} />
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default App;
