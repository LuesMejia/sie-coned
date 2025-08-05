import React from "react";

import Layout from "./Layout";
const PowerBIView = () => {
  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <iframe
        title="SIIE"
        width="100%"
        height="820"
        src="https://app.powerbi.com/view?r=eyJrIjoiMjNhMDQ2MzAtMGRlOS00MDllLWExMTktNGM5Yjk4ZDBjMjBhIiwidCI6IjI5MjY3MDJhLWZhZTctNDY5Yi04OWVmLTQwOGY2ZTJkMzliNiJ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default PowerBIView;
