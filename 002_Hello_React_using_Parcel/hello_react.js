import React from "react";
import ReactDOM from "react-dom/client";

const hello=(
    <h1 id="hello">Hello React!</h1>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(hello);