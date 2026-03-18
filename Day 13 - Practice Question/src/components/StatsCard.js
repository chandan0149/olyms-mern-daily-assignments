import React from "react";

const StatsCard = React.memo(({ title, value }) => {
  console.log(title + " rendered");

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
});

export default StatsCard;