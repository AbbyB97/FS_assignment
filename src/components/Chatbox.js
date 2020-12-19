import React from "react";
import styled from "styled-components";
import { Row, Col, Button,Container } from "react-bootstrap";

import { ReactComponent as ItalicIcon } from "../icons/italic_i_svg.svg";

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
  border-bottom: 0.5px solid #C4C4C4;
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
  width: 100%;
  height: 600px;
  overflow: scroll;
  overflow-x: hidden;
  .chat-id {
    background-color: #efebeb;
    width: max-content;
  }

  .sender {
    p {
      padding:1rem;
      margin-top: 1rem;
      background-color: #ecf2fa;
      margin-right: 40%;
      margin-left: 1rem;
      border-radius:1rem;
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
      border-radius:1rem;
      padding:1rem;

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
              borderRadius:"5px",
              minWidth: "max-content",
              marginTop: "1rem",
              marginLeft: "0",
              backgroundColor: "#6b6565",
            }}
          >
            <div style={{display:"flex"}}>

            <p style={{ color: "#ffbb00" ,margin:"0rem"}} className="pr-3 h4">
            <ItalicIcon/>
            </p>
            <span class="contact-info-text">Contact Info</span>
            </div>
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
      {renderMessages()}
        
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
                padding:"1rem"
              }}
              rows="5"
            ></textarea>
          </Row>
          <Container>
          <Row
            style={{
              background: "#f9f8f8",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            <Col style={{backgroundColor:"purple"}} md={2} xl={1} sm={1} xs={1} className="my-auto">
              <i
                style={{ color: "gray", cursor: "pointer" }}
                className="fas fa-paperclip fa-lg"
              ></i>
            </Col>
            <Col style={{backgroundColor:"pink"}} md={2} xl={1} sm={1} xs={1} className="my-auto">
              <i
                style={{ color: "gray", cursor: "pointer" }}
                className="far fa-smile fa-lg"
              ></i>
            </Col>
            <Col style={{backgroundColor:"orange"}} md={2} xl={1} sm={1} xs={1} className="my-auto">
              <i
                style={{ color: "gray", cursor: "pointer" }}
                className="fas fa-microphone fa-lg"
              ></i>
            </Col>
            <Col style={{backgroundColor:"red"}} md={{ span: 2, offset: 3 }} xl={{ span: 1, offset: 8 }} sm={{span: 1, offset: 7}} xs={{span: 1, offset: 7}}>
              <button
                style={{
                  background: "#ffbb00",
                  width: "",
                  borderRadius: "0.85rem",
                }}
                className="ui icon button"
              >
                <i
                  style={{ color: "white" }}
                  className="fas fa-paper-plane fa-lg"
                ></i>
              </button>
            </Col>
          </Row>
          </Container>
        </div>
      </InputContainer>
    </MainCard>
  );
};

const renderMessages =() =>{
  const returnObj = [];
  for (var i = 0; i < 7; i++) {
    const objRow = (
      <div key={faker.random.uuid()}>
      <div className="sender">
        <p className="mb-1">{faker.lorem.paragraph()}</p>
        <span style={{color:"gray"}}>11:30 a.m.</span>
      </div>
      <div className="reciever">
        <p>{faker.lorem.paragraph()}</p>

        <div style={{ textAlign: "right" }}>
        <span style={{color:"gray"}}>11:30 a.m.</span>
          <i style={{color:`${i===6? 'gray':'#ffbb00'}`,cursor:"pointer"}} className="fas fa-check-double mr-4"></i>
          <span>
            {i===6?<i style={{color:"#d9d9d9",cursor:"pointer"}} className="fas fa-trash"></i>:null}
          </span>
        </div>
      </div>
      </div>
    );

    returnObj.push(objRow);
  }
  return returnObj;
  
}


export default Chatbox;
