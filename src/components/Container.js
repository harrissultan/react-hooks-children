import React from "react";

function Container({
  header,
  children,
  textPosition = "centre", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "centre" // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h1>{header}</h1> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
