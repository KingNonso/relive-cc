import React, { useEffect, useState } from "react";

interface RouteHeaderProps {
  routeName: string;
  completion: number;
}

const RouteHeader: React.FC<RouteHeaderProps> = ({
  routeName: initialRouteName,
  completion: initialCompletion,
}) => {
  const [routeName, setRouteName] = useState(initialRouteName);
  const [completion, setCompletion] = useState(initialCompletion);

  let label: string = completion === 100 ? "finished" : `${completion * 100}%`;

  useEffect(() => {
    setRouteName(initialRouteName);
    setCompletion(initialCompletion);
  }, [initialCompletion, initialRouteName]);

  return (
    <>
      <div className="route-header">
        <h1>
          {routeName}, {label}
        </h1>
      </div>
    </>
  );
};

export default RouteHeader;
