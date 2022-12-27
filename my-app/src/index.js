import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Amin from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Amin />
  </React.StrictMode>
);
//always run these
//npx json-server --watch C:\Users\aminr\SideZone-10\my-app\src\data\db.json --port 8000
//npm install react-router-dom --save

