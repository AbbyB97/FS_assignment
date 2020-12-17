import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Filter from "./components/widgets/Filter";
import "./App.scss"

const App = () => {
  return (
    <div>
      <Header />
      <hr/>
      <Searchbar />
      <Sidebar />
      <Filter />
      <Footer />

    </div>
  );
};

export default App;
