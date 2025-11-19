import React, { useEffect } from "react";

function ChiSiamo({ onHeroFinished }) {
  useEffect(() => {
    setTimeout(() => {
      onHeroFinished?.(); // fa comparire la navbar
    }, 2000);
  }, []);
  return <div>chiSiamo</div>;
}

export default ChiSiamo;
