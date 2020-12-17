import React from "react";
import { Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Filter from "./components/widgets/Filter";
import MessageList from "./components/MessageList";
import Chatbox from "./components/Chatbox";

import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <hr />

      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <Searchbar />
          <Filter />
          <MessageList />
        </Col>
        <Col>
          <Chatbox />
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default App;
