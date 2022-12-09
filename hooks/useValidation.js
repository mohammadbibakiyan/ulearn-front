import { useState } from "react";

const UseValidation=(errorHandler)=>{
  const [touch,setTouch]=useState(false);
  const [value,setValue]=useState("");
  const error=errorHandler(value);
  
  const touchHandler=()=>{
    setTouch(true);
  }
  const chengeHandler=(e)=>{
    setValue(e.target.value)
  }

  return{
    error,touch,value,touchHandler,chengeHandler
  }
}

export  default UseValidation;