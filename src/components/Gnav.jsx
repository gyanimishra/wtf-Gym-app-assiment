
import React from "react";

import { GoLocation } from 'react-icons/go';

import NavbarImage from "./NavbarImage.png"
import Gmid from "./Gmid";
import Gside from "./Gside";
import { Button, Input } from "@chakra-ui/react";/////chakara part
import "./Gym.css";
const Gnav = () => {
  return (
    <>
      <div className="MainNav">
        <img src={NavbarImage}  />
      </div>


      {/* first section     end/////////// */}
      
      <div className="NavInput">
         <Input className="Inputbox1"  placeholder="Search the Gym" variant="filled"  />

       
         <Button id="btn"><GoLocation id="logo"/></Button>



         <Button id="btn1">Clear</Button>
      
      </div>

      <Gmid/>


      {/* medium section  */}
      <Gside/>
     
    </>
  );
};

export default Gnav;
