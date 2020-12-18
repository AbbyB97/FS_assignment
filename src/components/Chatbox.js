import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
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
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  .chatboxUserCol{
    display:flex;
    flex-direction:column;
    text-align:center;
    height:7.5rem;
    p{
      color:black;
      position:relative;
      top:-20px;
      margin:0px;
      
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
  width: 100%;
  padding-right: 20px;
  height: 5rem;
`;

const Chatbox = () => {
  return (
    <MainCard className="card">
      <CardHeader>
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
          <p className="font-weight-light text-secondary" >@{faker.name.firstName()}</p>
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
      <InputContainer>this is input box</InputContainer>
    </MainCard>
  );
};

export default Chatbox;
