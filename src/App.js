import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
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
          <Col style={{ backgroundColor: "blue" }} md={4} lg={3} xl={2}>
            <Sidebar />
          </Col>
          <Col
            style={{  backgroundColor: "pink" }}
            md={3}
            lg={4}
            xl={4}
          >
            <Searchbar />
            <MessageList />
          </Col>
          <Col style={{ backgroundColor: "green" }} md={5} lg={5} xl={6}>
            <Row>
              <Button
                variant="warning"
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  marginTop: "1rem",
                  marginLeft:"auto",
                  marginRight:"3rem"
                }}
              >
                + Add a new Chat
              </Button>
            </Row>
            <Row>
              <Chatbox />
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default App;
