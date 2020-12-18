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
  height: 600px;
  margin-top: 1rem;
  overflow: scroll;
  overflow-x: hidden;

  .chat-id {
    background-color: #efebeb;
    width: max-content;
  }

  .sender {
    p {
      margin-top: 1rem;
      background-color: #ecf2fa;
      margin-right: 40%;
      margin-left: 1rem;
    }
    span {
      margin-left: 1rem;
    }
  }

  .reciever {
    p {
      margin-top: 1rem;
      margin-right: 1rem;
      background-color: #fcf2f7;
      margin-left: 40%;
    }
    span {
      margin-left: auto;
      margin-right: 1rem;
    }
  }
`;
const InputContainer = styled("div")`
  width: 95%;
  margin: 1rem;
  border: 2px solid #ffbb00;
  border-radius: 15px;
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
          <p style={{ fontSize: "1.5rem" }}>{faker.lorem.words()}</p>
        </div>
        <div className="my-auto">
          <Button
            style={{
              color: "white",
              fontSize: "1.2rem",

              minWidth: "max-content",
              marginTop: "1rem",
              marginLeft: "0",
              backgroundColor: "#6b6565",
            }}
          >
            <span style={{ color: "#ffbb00" }} className="pr-3 h4">
              i
            </span>
            Contact Info
          </Button>
        </div>
        <div className="my-auto">
          <i
            style={{ cursor: "pointer", fontSize: "1.4rem" }}
            className="fas fa-ellipsis-v mr-1 pt-3"
          ></i>
        </div>
      </CardHeader>
      <MessagesContainer>
        <div className="chat-id px-3 ml-auto">
          Chat Id : {faker.random.number()}
        </div>
        <div className="sender">
          <p class="mb-1">{faker.lorem.paragraph()}</p>
          <span>11:30 a.m.</span>
        </div>
        <div className="reciever">
          <p>{faker.lorem.paragraph()}</p>

          <div style={{ textAlign: "right" }}>
            <span>11:30 a.m.</span>
            <i class="fas fa-check-double mr-4"></i>
            <span>
              <i class="fas fa-trash"></i>
            </span>
          </div>
        </div>
      </MessagesContainer>
      <InputContainer>
        <div className="container-fluid ">
          <Row>
            <textarea
              className="mx-3"
              style={{
                resize: "none",
                border: "none",
                outline: "none",
                width: "97.5%",
              }}
              rows="5"
            ></textarea>
          </Row>
          <Row
            style={{
              background: "#f9f8f8",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            <Col md={2} xl={1} sm={1} className="my-auto">
              <i
                style={{ color: "gray", cursor: "pointer" }}
                class="fas fa-paperclip fa-lg"
              ></i>
            </Col>
            <Col md={2} xl={1} sm={1} className="my-auto">
              <i
                style={{ color: "gray", cursor: "pointer" }}
                class="far fa-smile fa-lg"
              ></i>
            </Col>
            <Col md={2} xl={1} sm={1} className="my-auto">
              <i
                style={{ color: "gray", cursor: "pointer" }}
                class="fas fa-microphone fa-lg"
              ></i>
            </Col>
            <Col md={{ span: 3, offset: 3 }} xl={{ span: 2, offset: 7 }} sm={1}>
              <button
                style={{
                  width: "5rem",
                  background: "#ffbb00",
                  width: "100%",
                  borderRadius: "0.85rem",
                }}
                className="ui icon button"
              >
                <i
                  style={{ color: "white" }}
                  class="fas fa-paper-plane fa-lg"
                ></i>
              </button>
            </Col>
          </Row>
        </div>
      </InputContainer>
    </MainCard>
  );
};

export default Chatbox;
