import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import faker from "faker";

const MainCard = styled("div")`
  font-family: sans-serif;
  width: 90%;
  background-color: white;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;
`;

const CardHeader = styled("div")`
  background: #e8f5f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  .chatboxUserCol {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 7.5rem;
    p {
      color: black;
      position: relative;
      top: -20px;
      margin: 0px;
    }
  }
`;

const MessagesContainer = styled("div")`
  background-color: pink;
  width: 100%;
  padding-right: 20px;
  height: 800px;

  overflow: scroll;
  overflow-x: hidden;
`;
const InputContainer = styled("div")`
  background: lightblue;
  width:95%;
  margin:1rem;
  border: 2px solid #ffbb00;
  border-radius: 5px;
  
`;

const Chatbox = () => {
  return (
    <MainCard className="card">
      <CardHeader className="pr-2">
        <div className="chatboxUserCol">
          <img
            alt="avatar"
            className="ui avatar image"
            style={{
              width: "80px",
              height: "80px",
              position: "obsolute",
              top: "-2rem",
              marginLeft: "1rem",
            }}
            src={`https://i.pravatar.cc/150?img=1${Math.floor(
              Math.random() * 9
            )}`}
          />
          <p className="font-weight-bold">{faker.name.firstName()}</p>
          <p className="font-weight-light text-secondary">
            @{faker.name.firstName()}
          </p>
        </div>
        <div style={{ width: "60%" }} className="my-auto">
          <p style={{fontSize:"1.5rem"}}>{faker.lorem.words()}</p>
        </div>
        <div className="my-auto">
          <Button
            style={{
              color: "white",
              fontSize: "1.2rem",

              minWidth:"max-content",
              marginTop: "1rem",
              marginLeft: "0",
              backgroundColor: "#6b6565",
            }}
          >
            <span style={{ color: "#ffbb00" }} class="pr-3 h4">
              i
            </span>
            Contact Info
          </Button>
        </div>
        <div className="my-auto">
          <i
            style={{ cursor: "pointer",fontSize:"1.4rem"}}
            class="fas fa-ellipsis-v mr-1 pt-3"
          ></i>
        </div>
      </CardHeader>
      <MessagesContainer>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
      </MessagesContainer>
      <InputContainer  >
      <div class="container-fluid ">

      <Row>
      <textarea style={{resize:"none",border:"none",outline:"none",width:"100%"}}  rows="5"></textarea>
      </Row>
      <Row>
        <Col md={2} xl={1}>sa1</Col>
        <Col md={2} xl={1}>sa1</Col>
        <Col md={2} xl={1}>sda</Col>
        <Col md={{ span: 2, offset: 4 }} xl={{ span: 2, offset: 7 }} >sda1</Col>
      </Row>
      </div>
      </InputContainer>
    </MainCard>
  );
};

export default Chatbox;
