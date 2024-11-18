import React from "react";

export default function Page() {
  return (
    <>
      <header
        style={{
          position: "sticky",
          height: "100px",
          width: "100%",
          fontSize: "70px",
          fontWeight: "bold",
          fontStyle: "",
        }}
        className="font-sans"
      >
        <div>MAX WALLWEY</div>
      </header>
      <body>
        <h3>This is the body</h3>
        <div>Content</div>
      </body>
    </>
  );
}
