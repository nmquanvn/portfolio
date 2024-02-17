import React from "react";

function list(props: any) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left" }}>
      <button
        className="category"
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#64ffda" }
            : { color: "#8892b0" }
        }
      >
        {props.data.expData.tech}
      </button>
    </li>
  );
}

export default list;
