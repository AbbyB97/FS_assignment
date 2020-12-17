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
      <div className="container-fluid">
        <Row>
          <Col style={{backgroundColor:"blue"}} md={4} lg={3} xl={2}>
            <Sidebar />
          </Col>
          <Col style={{ height:"800px", backgroundColor: "pink" }} md={3} lg={4} xl={5}>
            <Searchbar />
            <Filter />
            <MessageList />
          </Col>
          <Col style={{ backgroundColor: "yellow" }} md={5} lg={5} xl={5}>
            <Chatbox />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default App;
