import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import React from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<React.StrictMode>
  <BrowserRouter>  
    <App />
 </BrowserRouter> 
 </React.StrictMode>
  
);
//always run these
//npx json-server --watch C:\Users\aminr\SideZone-10\my-app\src\data\db.json --port 8000
//npm uninstall -S react-router-dom
//npm install -S react-router-dom@5.3.3

