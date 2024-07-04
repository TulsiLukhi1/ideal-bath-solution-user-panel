import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform flex -translate-x-1/2 -translate-y-1/2 w-36">
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        className="mx-auto"
      />
    </div>
  );
};

export default Loader;
