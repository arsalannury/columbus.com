import React from "react";
import ColumbusPage from "./components/Columbus/Columbus.page";

function App() {
  return (
    <>
      <React.Profiler id="columbus" onRender={(e) => console.log(e)}>
        <ColumbusPage />
      </React.Profiler>
    </>
  );
}

export default App;
