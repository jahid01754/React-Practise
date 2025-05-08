import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "./components/Button.jsx";
import RenderingLists from "./components/RenderingLists.jsx";
import Pure from "./components/PureComponent/Pure.jsx";
import CreateStory from "./components/PureComponent/CreateStory.jsx";
import UITree from "./components/Tree/UITree.jsx";
import InterActive from "./components/Interactivity/InterActive.jsx";
import AddingInterActivity from "./components/Interactivity/AddingInterActivity.jsx";
import Chat from "./components/Interactivity/Chat.jsx";
import Score from "./components/Interactivity/Score.jsx";
import UpdatingObjects from "./components/Interactivity/UpdatingObjects.jsx";
import UpdatingArrays from "./components/Interactivity/UpdatingArrays.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Button /> */}
    {/* <RenderingLists /> */}
    {/* <Pure /> */}
    {/* <CreateStory /> */}
    {/* <UITree /> */}
    {/* <InterActive /> */}
    {/* <AddingInterActivity /> */}
    <Chat />
    <Score />
    {/* <UpdatingObjects /> */}
    <UpdatingArrays />
  </StrictMode>
);
