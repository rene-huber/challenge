import React from "react";

function Image({ src, alt }) {
  return (
    <div>
      <img className="round-image" src={src} alt={alt} />
    </div>
  );
}

export default Image;
