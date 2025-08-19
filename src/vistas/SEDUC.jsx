import React from "react";


const PowerBIView = () => {
  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
    
      <iframe
        title="SIIE-SEDUC-CONED"
        width="110%"
        height="820"
        src="https://app.powerbi.com/view?r=eyJrIjoiNjJjNmU0NzctOTM5Yi00ZDQzLWIyNjAtMDFiYTA5NGNkOWEwIiwidCI6IjI5MjY3MDJhLWZhZTctNDY5Yi04OWVmLTQwOGY2ZTJkMzliNiJ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default PowerBIView;
