import React from "react";
import faker from "faker";
import {Row,Col} from 'react-bootstrap'
const MessageList = () => {
  console.log("img 0-",faker.internet.avatar());
  return (
   <div className="container-fluid pt-1 pb-1 mt-4 " style={{backgroundColor:"white"}}>
     <Row style={{borderRadius:"5px",backgroundColor:"#e8f5f9"}} className="mt-3 pt-1 mb-3 mx-auto border container">
       <Col md={2}>
         <Row>
           <img alt="avatar"  style={{height:"2.5vw",width:"2.5vw",borderRadius:"10rem"}} src={`https://i.pravatar.cc/150?img=1${Math.floor(Math.random() * 11)}`}/>
         </Row>
       <Row className="mt-1" style={{}}>
         <p>{faker.name.firstName()}</p>
       </Row>
       </Col>
       <Col md={6}>
         <Row className="mt-3">
           <div ><p>{faker.lorem.word()}</p></div>
         </Row>
         <Row>
         <div ><p>{faker.lorem.sentence()}</p></div>

         </Row>
       </Col>
       <Col md={4}>
       <Row  >
           <div style={{backgroundColor:"whitesmoke"}} ><p>Chat ID: {faker.random.number()}</p></div>
         </Row>
         <Row>
         <div ><p style={{color:"gray",marginTop:"2rem"}}>11:00 am</p></div>

         </Row>
       </Col>
       
     </Row>
   
   </div>
  );
};

export default MessageList;
