import React from "react";

function PageTitle(props) {
  const { title, subtitle } = props;
  return (
    <div>
      <h1 style={{
        marginBottom:'16px'
      }}>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default PageTitle;
