import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Upload from "./Component/Upload";
import Container from "@material-ui/core/Container";
import Search from "./Component/Search";
import List from "./Component/List";

function App() {
  const [view, setView] = React.useState(0);

  return (
    <div className="App">
      <Navbar view={view} setView={setView} />
      <Container>{[<Upload />,<List />, <Search />][view]}</Container>
    </div>
  );
}

export default App;
