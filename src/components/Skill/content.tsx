import React from "react";

function content(props: any) {
  let data = props.data.expData;
  return (
    <div
      key={props.index}
      className="styledContent"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4>{data?.position}</h4>
      <h5>{data?.period}</h5>
      {data?.details.map((detail: any, index: any) => (
          <p className="detail" key={index}><span className="subject">{`${detail.subject}:`}&nbsp;</span>{detail.value}</p>
      ))}
    </div>
  );
}

export default content;
