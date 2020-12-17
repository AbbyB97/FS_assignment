import React from "react";
import faker, { fake } from "faker";
import { Row, Col } from "react-bootstrap";
const MessageList = () => {
  console.log("img 0-", faker.internet.avatar());
  return (
    // <div
    //   className="container-fluid pt-1 pb-1 mt-4 "
    //   style={{ backgroundColor: "white" }}
    // >
    //   <Row
    //     style={{ borderRadius: "5px", backgroundColor: "#e8f5f9" }}
    //     className="mt-3 pt-1 mb-3 mx-auto border container"
    //   >
    //     <Col md={2}>
    //       <Row>
    //         <img
    //           alt="avatar"
    //           style={{ height: "2.5vw", width: "2.5vw", borderRadius: "10rem" }}
    //           src={`https://i.pravatar.cc/150?img=1${Math.floor(
    //             Math.random() * 11
    //           )}`}
    //         />
    //       </Row>
    //       <Row className="mt-1" st yle={{}}>
    //         <p>{faker.name.firstName()}</p>
    //       </Row>
    //     </Col>
    //     <Col md={6}>
    //       <Row className="mt-3">
    //         <div>
    //           <p>{faker.lorem.word()}</p>
    //         </div>
    //       </Row>
    //       <Row>
    //         <div>
    //           <p>{faker.lorem.sentence()}</p>
    //         </div>
    //       </Row>
    //     </Col>
    //     <Col md={4}>
    //       <Row>
    //         <div style={{ backgroundColor: "whitesmoke" }}>
    //           <p>Chat ID: {faker.random.number()}</p>
    //         </div>
    //       </Row>
    //       <Row>
    //         <div>
    //           <p style={{ color: "gray", marginTop: "2rem" }}>11:00 am</p>
    //         </div>
    //       </Row>
    //     </Col>
    //   </Row>
    // </div>
    <div className="message-list-container mt-5">
      <div style={{ position: "relative" }}>
        <div
          style={{ backgroundColor: "#e8f5f9" }}
          className="p-0 card border card-style"
        >
          <div className="user-column ml-2">
            <img
              alt="avatar"
              src={`https://i.pravatar.cc/150?img=1${Math.floor(
                Math.random() * 11
              )}`}
            />
            <p style={{ color: "black", fontWeight: "bold" }}>
              {faker.name.firstName()}
            </p>
            <p style={{ color: "gray" }}>{`@${faker.name.lastName()}`}</p>
          </div>
          <div className="message-column">
            <h4>{faker.lorem.word()}</h4>
            <p>{faker.lorem.sentence()}</p>
          </div>
          <div className="time-id-column">
            <div style={{ maxWidth: "max-content" }}>
              <p
                className="px-1"
                style={{
                  borderRadius: "5px",
                  color: "#6B6565",
                  background: "#efebeb",
                }}
              >
                Chat ID: 2131233
              </p>
            </div>
            <p style={{ textAlign: "right", padding: "10px", color: "green" }}>
              11:00 a.m
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0.5vw",
            right: "1.2vw",
            borderRadius: "1.5rem",
            backgroundColor: "green",
            width: "max-content",
          }}
        >
          <p className="px-2" style={{ color: "white", fontSize: "1.1rem" }}>
            3
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
