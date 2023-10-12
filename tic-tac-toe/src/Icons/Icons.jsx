/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {FaRegCircle , FaPen , FaTimes} from 'react-icons/fa'
function Icons({name}) {
    if(name === "Circle")
        return <FaRegCircle size={40} color="red" />;
    else if(name == "Cross")
        return <FaTimes size={40} color='red'/>
    else
        return <FaPen size={20} color="white" />;
  
  
}

export default Icons
