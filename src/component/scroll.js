import React from "react";

const Scroll = (props) => {
  // console.log(props);
  // return props.children;
  return (
    <div
      style={{
        overflow: "scroll",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
