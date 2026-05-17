import React from "react";

export default function PageTransition({
  phase = "cover",
  colors = ["#306d93", "#ddd2c0"],
}) {
  return (
    <div className={`page-transition page-transition--${phase}`}>
      {colors.map((color, i) => (
        <div
          key={color}
          className="page-transition__layer"
          style={{
            "--transition-color": color,
            "--transition-index": i,
          }}
        />
      ))}
    </div>
  );
}
