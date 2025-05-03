import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "./components/Button.jsx";
import RenderingLists from "./components/RenderingLists.jsx";
import Pure from "./components/PureComponent/Pure.jsx";
import CreateStory from "./components/PureComponent/CreateStory.jsx";
import UITree from "./components/Tree/UITree.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Button /> */}
    {/* <RenderingLists /> */}
    {/* <Pure /> */}
    {/* <CreateStory /> */}
    <UITree />
  </StrictMode>
);
