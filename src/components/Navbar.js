import React from "react";
import Button from 'react-bootstrap/Button';
import Logo from "./widgets/Logo";


const Navbar = () => {
  return (
    <>
  <style type="text/css">
    {`
    .btn-mystyle {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="mystyle" size="xxl">
    flat button
  </Button>
</>
  );
};


export default Navbar;