import React from "react";
import styled from "styled-components";
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

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
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
    <MainCard class="card">
      <CardHeader> hiiiiiii</CardHeader>
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
      < InputContainer>this is input box</InputContainer>
    </MainCard>
  );
};

export default Chatbox;
