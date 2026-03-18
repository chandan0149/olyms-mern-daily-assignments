import React from "react";

function Greeting({ children }) {
  const userName = "Reader";

  return (
    <div>
      {children(userName)}
    </div>
  );
}

export default Greeting;