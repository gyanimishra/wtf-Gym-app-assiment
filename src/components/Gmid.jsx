import React from "react";
import axios from "axios";
import {  Input, Text,Button} from "@chakra-ui/react";
import { useState } from "react";

import { useEffect } from "react";
import "./Gym.css";

const Gmid = () => {
  const [data, setdata] = useState([]);
  

  useEffect(() => {
    let fetchdata = () => {
      axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231")
        .then((res) => {
          setdata(res.data.data);})};
   fetchdata();
  }, []);
  


   

 
  
  // console.log(data);
  return (
    <div className="MidMain">


      <div className="MidFil">

        <h2 id="filterh2">Filters</h2>
        <div id="location">
          <p>Location</p>

          {/* chakra part */}
          <Input
            id="in1"
            width={"75%"}
            height={"50px"}
            placeholder="Enter Location"
          />
        </div>
        <div className="Midprice">
          <p>Price</p>
          <Input
            id="Maininput"
            width={"20%"}
            marginRight={"10px"}
            variant="filled"
            placeholder="Min"
            height={"50px"}
          />
          <Input id="in1" width={"20%"} height={"50px"} placeholder="Max" />
        </div>
        <div id="Midities">
          <p>Cities</p>
          <select id="selects" >
            <option value="">Select Cities</option>
            <option value="Noida">Noida</option>
            <option value="Delhi">Delhi</option>
            <option value="Gaziabad">Gaziabad</option>
            
            <option value="new delhi">New Delhi</option>
           
            
          </select>
        </div>
      </div>
      <div className="Midlistitem">
        {data.map((item) => (
          <div id="MainMidmap">
            <div className="MainMidmapimage_div">

              {/* condition for not image */}
                {item.cover_image?<img src={item.cover_image} alt="" />:<img src="https://www.bing.com/th?id=OIP.cl6p7nZBiruTcSJZE5ZdQgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>}
            </div>
            <div id="Midlistitemdetails_div">

               <Text >{item.gym_name}</Text>

               <p >{item.address1} ,<span>{item.address2}</span></p>

               <p >{item.duration_text} | <span>{item.distance_text}</span></p>

               <div><Button marginTop={"150px"} bg={"red"} color={"white"}>Book Now</Button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gmid;
