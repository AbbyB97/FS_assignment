import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Filter from "./components/widgets/Filter";

const App = () => {
  return (
    <div>
      <Footer />
      <Navbar />
      <Searchbar />
      <Sidebar />
      <Filter />
    </div>
  );
};

export default App;
